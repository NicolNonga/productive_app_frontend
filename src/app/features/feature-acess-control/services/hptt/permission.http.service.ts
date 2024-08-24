import { HttpHandler } from "@angular/common/http";
import { DestroyRef, inject, Injectable, Signal, signal } from "@angular/core";

import { finalize, Observable, tap } from "rxjs";
import { PermissionPayload, ResponsePermissions } from "../../model/permission.model";
import { HttpHandleService } from "../../../../core/http/http-handle.service";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: "root"
})

export class PermissionHttpService extends HttpHandleService {
   public isComplete = signal(false)
   destroyRef = inject(DestroyRef)

   private getPermissions(): Observable<ResponsePermissions> {
      return this.GetAll("permission")
   }

    public createPermission(payload: PermissionPayload):Observable<unknown> {
        return this.Post('permission', payload).pipe((tap(), takeUntilDestroyed(this.destroyRef)))
    }

    public desablePermission(permission_id: number):Observable<unknown>{
        return this.genericPut(`permission/${permission_id}/desable`,{}).pipe(tap(), takeUntilDestroyed(this.destroyRef))
    }
   public toSginalPermissions():Signal<ResponsePermissions> {
       return toSignal(
        this.getPermissions().pipe((finalize(()=> this.isComplete.set(true)))),
        {initialValue: {} as ResponsePermissions}
       )
   }
}