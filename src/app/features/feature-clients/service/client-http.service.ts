import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../core/http/http-handle.service";
import { ResponseClients } from "../model/clients.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { finalize } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ClientHttpService extends HttpHandleService{
    public isComplete = signal(false)

    public toSignalClients(): Signal<ResponseClients>{
        return toSignal(
            this.GetAll<ResponseClients>('clients').pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: {} as ResponseClients}
        )
    }
}
