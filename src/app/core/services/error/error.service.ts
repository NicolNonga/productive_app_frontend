import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ERRO_MESSAGE } from "../../constant/global.constant";

@Injectable({
  providedIn: "root",
})
export class ErrorService {
  getClienteError(error: Error): string {
    return error.stack?.toString() || "";
  }

  getServerMessage(error: HttpErrorResponse) {
    error.status === 0 ? ERRO_MESSAGE.serverOffLine : error.error?.message;
  }
}
