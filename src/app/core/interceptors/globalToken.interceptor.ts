import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { setLocalStoreService } from "../services/authentication/auth.service";


export const HttpTokenInterceptor : HttpInterceptorFn = (req, next) => {
    const currentUser = inject(setLocalStoreService)

    const authReq = req.clone({
        setHeaders: {
             Authorization: `Bearer ${currentUser?.currentUser?.token?.token}`
        }
    })

    return next(authReq)
}