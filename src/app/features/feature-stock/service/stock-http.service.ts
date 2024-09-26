import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../core/http/http-handle.service";

import { toSignal } from "@angular/core/rxjs-interop";
import { finalize } from "rxjs";
import { ResponseStock } from "../model/stock.model";
import { ResponseMomentStock } from "../model/moviment-stock.model";

@Injectable({
    providedIn: 'root'
})

export class StockHttpService extends HttpHandleService {
    public isComplete = signal(false)


    public toSignalStock(): Signal<ResponseStock>{
        return toSignal(
            this.GetAll<ResponseStock>('stock').pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: {} as ResponseStock})
    }

    public toSignalMomentSotck(): Signal<ResponseMomentStock>{
        return toSignal(
            this.GetAll<ResponseMomentStock>('moviment_stock').pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: {} as ResponseMomentStock})
    }


}
