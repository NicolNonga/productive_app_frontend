import { Injectable, signal, Signal } from "@angular/core";
import { environment } from "../../../../../environment/environment";
import { HttpHandleService } from "../../../../core/http/http-handle.service";
import { finalize, Observable, single } from "rxjs";
import { ResponseLogs } from "../../models/logs.model";
import { toSignal } from "@angular/core/rxjs-interop";


@Injectable({
    providedIn: "root"
})

export class LogsServiceHttp  extends HttpHandleService {
    private isComplete = signal(false)


    private getAllLogs(): Observable<ResponseLogs>{
        return this.GetAll(`log`)
    }

    public toSignalLogs(): Signal<ResponseLogs> {
        return toSignal(this.getAllLogs().pipe(finalize(()=> this.isComplete.set(true))),
    {
        initialValue: {} as ResponseLogs
    })
    }
}