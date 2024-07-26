import { Observable } from 'rxjs';

export interface HttpBaseInterface {
  getById(url: string, paramsId: number | string): Observable<any>;
  GetAll(url: string, params?: ParamsType): Observable<any>;
  Post(url: string, data: any): Observable<any>;
  Delete(url: string, paramsId: number | string): Observable<any>;
  put(url: string, data: any, paramsId: number | string): Observable<any>;
}

export type ParamsType = { hideLoader: boolean }