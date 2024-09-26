import { HttpHandler } from "@angular/common/http";
import { DestroyRef, inject, Injectable, Signal, signal } from "@angular/core";

import { finalize, Observable, tap } from "rxjs";
import { PermissionInterface, PermissionPayload, PermissionRole, ResponsePermissions } from "../../model/permission.model";
import { HttpHandleService } from "../../../../core/http/http-handle.service";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: "root"
})

export class PermissionHttpService extends HttpHandleService {
   public isComplete = signal(false)


   private getPermissions(): Observable<ResponsePermissions> {
      return this.GetAll("permission")
   }

   public dropDownList(): Observable<PermissionInterface []>{
    return this.GetAll("permission/drop-down-list")
   }

   public enablePermission(permission_id: number): Observable<unknown>{
    return this.genericPut(`permission/${permission_id}/enable`,{})
   }
    public createPermission(payload: PermissionPayload):Observable<unknown> {
        return this.Post('permission', payload)
    }

    public desablePermission(permission_id: number):Observable<unknown>{
        return this.genericPut(`permission/${permission_id}/desable`,{})
    }

     public addPermissionRole(role_id: number , permission_id: number): Observable<unknown>{
        return this.Post('roles_permission', {role_id, permission_id})
     }
     public deletePermissonRole(permissionRole: PermissionRole): Observable<unknown>{

        return this.genericPut('roles_permission', permissionRole)
     }
   public toSginalPermissions():Signal<ResponsePermissions> {
       return toSignal(
        this.getPermissions().pipe((finalize(()=> this.isComplete.set(true)))),
        {initialValue: {} as ResponsePermissions}
       )
   }
   public toSginalDropDown(): Signal<PermissionInterface [] | undefined >{
    return toSignal(
        this.dropDownList().pipe((finalize(()=> this.isComplete.set(true)))),
        {initialValue: []   }
       )
   }
}
