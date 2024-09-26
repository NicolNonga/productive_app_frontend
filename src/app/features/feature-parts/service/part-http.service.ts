import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../core/http/http-handle.service";
import { Part, ResponsePart } from "../model/part.model";
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

    public toSignalPartAll(): Signal<Part[] | undefined>{
        return toSignal(
            this.GetAll<Part[]>('parts/all').pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: [] })
    }

    public downloadImgPart(fileName: string): Signal<unknown> {
        return toSignal(
            this.GetAll<unknown>(`parts/download/file/${fileName}`).pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: {} as any})
    }
}
