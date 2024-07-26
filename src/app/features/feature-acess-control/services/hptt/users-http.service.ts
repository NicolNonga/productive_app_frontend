import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { ResponseUsers } from '../../model/user.model';
import { environment } from '../../../../../environment/environment';
import { IcreateUser } from '../../../../core/interface/user.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  private url: string = environment.app_url;
  public isComplete = signal(false);
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(`${this.url}/users`);
  }

  public create(payload: IcreateUser): Observable<void> {
    return this.http.post<void>(`${this.url}/users`, payload);
  }

  public toSignalUsers(): Signal<ResponseUsers> {
    return toSignal(
      this.getUsers().pipe(finalize(() => this.isComplete.set(true))),
      { initialValue: {} as ResponseUsers }
    );
  }
}
