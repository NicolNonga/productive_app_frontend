import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { ResponseUsers } from '../../model/user.model';
import { environment } from '../../../../../environment/environment';
import { IcreateUser } from '../../../../core/interface/user.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpHandleService } from '../../../../core/http/http-handle.service';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService extends HttpHandleService {
  public isComplete = signal(false);


  public getUsers(): Observable<ResponseUsers> {
       return this.GetAll("users")
  }

  public create(payload: IcreateUser): Observable<void> {
   // return this.http.post<void>(`${this.url}/users`, payload);
   return this.Post("users", payload)
  }

  public toSignalUsers(): Signal<ResponseUsers> {
    return toSignal(
      this.getUsers().pipe(finalize(() => this.isComplete.set(true))),
      { initialValue: {} as ResponseUsers }
    );
  }
}
