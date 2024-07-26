import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, map } from "rxjs";
import { NotificationService } from "../services/notification/notification.service";

export const GlobalErrorHandler: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
) => {
  let message;
  let notifier = inject(NotificationService);
  return next(req).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if ([401, 403].includes(event.status)) {
          // add Log out  from the system
        }

        if ([200, 201].includes(event.status) && req.method !== "GET") {
          message = event.body.message;
          notifier.showSucessMessage(message);
          //notifier.notifyWithSuccess(message)
        }
      }

      return event;
    }),
    catchError((error: HttpErrorResponse) => {
      if (error instanceof HttpErrorResponse) {
        if ([400, 404].includes(error.status)) {
          notifier.showError(error?.error.message);
        }
        if (error.status === 0) {
          console.log("deficuldades");
          message = "Dificuldade em estabelecer conexão com o servidor";
          notifier.showError(message);
        }
      } else {
        if (!navigator.onLine) {
          message = "teste";
          notifier.showError(message);
        }
      }
      throw new Error(error.message);
    }),
  );
};
