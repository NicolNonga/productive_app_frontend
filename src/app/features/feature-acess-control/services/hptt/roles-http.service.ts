import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../../core/http/http-handle.service";
import { finalize, Observable, tap } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";
import { ResponseRoles, RoleDropDownList } from "../../model/role.model";

@Injectable({
    providedIn: 'root'
})

export class RoleHttpService extends HttpHandleService {
    public isComplete = signal(false)

    public getDropDownList():Observable<RoleDropDownList>{
        return this.GetAll<RoleDropDownList>("roles/list-dropdown")
    }

    public getRoles():Observable<ResponseRoles>{
        return this.GetAll('roles')
    }
    public desableRole(role_id: number): Observable<unknown>{
        return this.genericPut(`roles/${role_id}/desable`, {})
    }

    public enableRole(role_id: number) : Observable<unknown> {
        return this.genericPut(`roles/${role_id}/enable`, {})
    }




    public toSignalDropDownList(): Signal<RoleDropDownList> {
        return toSignal(
            this.getDropDownList().pipe(finalize(()=>this.isComplete.set(true))),
            {
                initialValue: {} as RoleDropDownList
            }
        )
    }

    public toSignalRoles(): Signal<ResponseRoles>{
        return toSignal(
            this.getRoles().pipe(finalize(()=> this.isComplete.set(true))),
            {
                initialValue: {} as ResponseRoles
            }
        )
    }

}
