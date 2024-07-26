import { Injectable, Injector } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private toastService: ToastrService = this.injector.get(ToastrService);
  private titleSucess = "success";
  private titleFail = "info";

  constructor(private injector: Injector) {}

  public showSucessMessage(message: string): void {
    this.toastService.success(message, this.titleSucess);
  }

  public showError(message: string) {
    this.toastService.error(message, this.titleFail);
  }
}
