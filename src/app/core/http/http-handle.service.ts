import { Inject, Injectable, Injector } from "@angular/core";
import { HttpBaseInterface, ParamsType } from "../interface/http-base.interface";
import { Observable, tap } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environment/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpHandleService implements HttpBaseInterface {

    private baseUrl = environment.app_url
    constructor(private httpClient : HttpClient){}
 
    getById(url: string, paramsId: string | number): Observable<any> {
         return this.httpClient.get<any>(`${this.baseUrl}/${url}/${paramsId}`).pipe()
    }
    GetAll<T>(url: string, params?: ParamsType | undefined): Observable<T> {
         return this.httpClient.get<T>(`${this.baseUrl}/${url}`, {params : this.createParams(params)}).pipe()
    }
    Post(url: string, data: any): Observable<any> {
         return this.httpClient.post(`${this.baseUrl}/${url}`, data).pipe()
    }
    Delete(url: string, paramsId: string | number): Observable<any> {
          return this.httpClient.delete(`${this.baseUrl}/${url}/${paramsId}`).pipe()
    }
    put(url: string, data: any, paramsId: string | number): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}${url}/${paramsId}`, data).pipe()
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