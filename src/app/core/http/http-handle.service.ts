import { DestroyRef, inject, Inject, Injectable, Injector } from "@angular/core";
import { HttpBaseInterface, ParamsType } from "../interface/http-base.interface";
import { Observable, tap } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environment/environment";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class HttpHandleService implements HttpBaseInterface {

    private baseUrl = environment.app_url
    public destroyRef = inject(DestroyRef)
    constructor(private httpClient : HttpClient){}

    getById<T>(url: string, paramsId: string | number): Observable<T> {
         return this.httpClient.get<T>(`${this.baseUrl}/${url}/${paramsId}`).pipe(tap(), takeUntilDestroyed(this.destroyRef))
    }
    GetAll<T>(url: string, params?: ParamsType | undefined): Observable<T> {
         return this.httpClient.get<T>(`${this.baseUrl}/${url}`, {params : this.createParams(params)}).pipe(tap(), takeUntilDestroyed(this.destroyRef))
    }
    Post(url: string, data: any): Observable<any> {
         return this.httpClient.post(`${this.baseUrl}/${url}`, data).pipe(tap(), takeUntilDestroyed(this.destroyRef))
    }
    Delete(url: string, paramsId: string | number): Observable<any> {
          return this.httpClient.delete(`${this.baseUrl}/${url}/${paramsId}`).pipe(tap(), takeUntilDestroyed(this.destroyRef))
    }
    put(url: string, data: any, paramsId: number): Observable<any> {
        console.log(`${this.baseUrl}${url}/${paramsId}`, data)
        return this.httpClient.put(`${this.baseUrl}/${url}/${paramsId}`, data).pipe(tap(), takeUntilDestroyed(this.destroyRef))
    }
    genericPut(url:string, data:any){
        return this.httpClient.put(`${this.baseUrl}/${url}`, data).pipe(tap(), takeUntilDestroyed(this.destroyRef))
    }
    genericDelete(url:string, data:any){
        return this.httpClient.delete(`${this.baseUrl}/${url}`).pipe(tap(), takeUntilDestroyed(this.destroyRef))
    }

    createParams(params?: ParamsType){
        let httpParams = new HttpParams();
        if(params){
            Object.entries(params).forEach(([key, value])=> {
                httpParams  = httpParams.append(key, value)
            })
        }
        return httpParams
    }

}
