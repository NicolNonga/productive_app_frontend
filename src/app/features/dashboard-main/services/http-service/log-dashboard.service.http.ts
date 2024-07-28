import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../../core/http/http-handle.service";
import { finalize, Observable } from "rxjs";
import { ResponseDashboardLogInterface } from "../../models/dashboard-logs.model";
import { toSignal } from "@angular/core/rxjs-interop";


@Injectable({
    providedIn: "root"
})

export  class LogDashboardHttpService extends HttpHandleService {
    private isComplete = signal(false)

    private getDashboard(): Observable<ResponseDashboardLogInterface>{
        return this.GetAll(`logs/dashboard`)
    }

    public toSignalDashboardLogs(): Signal<ResponseDashboardLogInterface> {
         return toSignal(this.getDashboard().pipe(finalize(()=> this.isComplete.set(true))),
        {
            initialValue : {} as ResponseDashboardLogInterface
        })
    }
}