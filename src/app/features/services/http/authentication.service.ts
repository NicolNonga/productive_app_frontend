import { Injectable } from "@angular/core";
import { AuthPayload } from "../../../core/model/user-authentication.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environment/environment";
import { LoginResponseInterface } from "../../../core/interface/login.interface";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class HttpAuthenticationService {
  public userLoggedIn: any;
  constructor(private httpClient: HttpClient) {}

  loginUser(userFields: AuthPayload): Observable<LoginResponseInterface> {
    return this.httpClient
      .post<LoginResponseInterface>(`${environment.app_url}/auth`, userFields)
      .pipe();
  }
}
