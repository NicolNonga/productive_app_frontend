import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../core/http/http-handle.service";
import { ResponsePart } from "../model/part.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { finalize } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PartHttpService extends HttpHandleService {
    public isComplete = signal(false)


    public toSignalPart(): Signal<ResponsePart>{
        return toSignal(
            this.GetAll<ResponsePart>('parts').pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: {} as ResponsePart})
    }
}
