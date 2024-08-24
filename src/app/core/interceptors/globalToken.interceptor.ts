import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { setLocalStoreService } from "../services/authentication/auth.service";


export const HttpTokenInterceptor : HttpInterceptorFn = (req, next) => {
    const currentUser = inject(setLocalStoreService)

    const authReq = req.clone({
        setHeaders: {
             Authorization: `Bearer ${currentUser?.getItemFromLocalStore?.token?.token}`
        }
    })

    return next(authReq)
}