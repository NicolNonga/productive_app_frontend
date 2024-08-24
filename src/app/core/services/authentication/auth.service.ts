import { Injectable, signal } from "@angular/core";

import { AuthenticationModel } from "../../model/user-authentication.model";
import { LOCALSTOREVALUES } from "../../constant/global.constant";

@Injectable({
  providedIn: "root",
})
export class setLocalStoreService {
  public loggedIn$ = signal(false);
  constructor() {}

  public setItemToLocalStore(data: AuthenticationModel) {
    localStorage.setItem(LOCALSTOREVALUES.currentUser, JSON.stringify(data));
  }
  get getItemFromLocalStore() {
    const valueFromLocalStore = localStorage.getItem(
      LOCALSTOREVALUES.currentUser,
    )!;
    return JSON.parse(valueFromLocalStore);
  }
  public isAuthenticated(): boolean {
    const currentUser = this.getItemFromLocalStore;

    console.log(currentUser);

    if (currentUser) {
      this.loggedIn$.set(true);
      return this.loggedIn$();
    }

    return this.loggedIn$();
  }

  public get isLoggedIn(): boolean {
    return this.getItemFromLocalStore ? true : false;
  }

  public logout(): void {
    localStorage.clear();
    this.loggedIn$.set(false);
  }

  get currentUser(): AuthenticationModel {
    if (!this.loggedIn$()) {
      return new AuthenticationModel();
    }
    console.log(this.getItemFromLocalStore)
    return new AuthenticationModel().deserialize({
      ...this.getItemFromLocalStore,
    });
  }
}
