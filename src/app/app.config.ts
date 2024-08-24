import {
  ApplicationConfig,
  InjectionToken,
  importProvidersFrom,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { GlobalErrorHandler } from "./core/interceptors/globalErrorHandler.interceptor";
import { ToastrModule } from "ngx-toastr";
import { provideAnimations } from "@angular/platform-browser/animations";
import { HttpTokenInterceptor } from "./core/interceptors/globalToken.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([GlobalErrorHandler, HttpTokenInterceptor])),
    importProvidersFrom(ToastrModule.forRoot({})),
    importProvidersFrom(InjectionToken),
  ],
};
