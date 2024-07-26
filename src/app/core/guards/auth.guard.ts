import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { setLocalStoreService } from "../services/authentication/auth.service";

export const AuthGuard: CanActivateFn = () => {
  const route = inject(Router);
  const authService = inject(setLocalStoreService);
  if (authService.isAuthenticated()) {
    return true;
  }
  route.navigate(["/login"]);
  return false;
};
