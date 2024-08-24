import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../../core/http/http-handle.service";
import { finalize, Observable } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";
import { RoleDropDownList } from "../../../../core/model/role.model";

@Injectable({
    providedIn: 'root'
})

export class RoleHttpService extends HttpHandleService {
    public isComplete = signal(false)

    public getDropDownList():Observable<RoleDropDownList>{
        return this.GetAll<RoleDropDownList>("roles/list-dropdown")
    }

    public toSignalDropDownList(): Signal<RoleDropDownList> {
        return toSignal(
            this.getDropDownList().pipe(finalize(()=>this.isComplete.set(true))),
            {
                initialValue: {} as RoleDropDownList
            }
        )
    }
     
}