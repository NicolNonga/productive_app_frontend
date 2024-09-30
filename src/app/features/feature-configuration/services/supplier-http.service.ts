import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../core/http/http-handle.service";
import { ResponseSupplier, ResponseSupplierDropDown, Supplier } from "../model/supplier.model";
import { finalize } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class SupplierHttpService extends HttpHandleService {
 public isComplete = signal(false)

 public toSignaSupplier(): Signal<ResponseSupplier>{
    return toSignal(
        this.GetAll<ResponseSupplier>('supplier').pipe(finalize(()=>this.isComplete.set(true))),
        {initialValue: {} as ResponseSupplier}

    )
}
public toSignaSupplierAll(): Signal<ResponseSupplierDropDown>{
    return toSignal(
        this.GetAll<ResponseSupplierDropDown>('supplier/dropdown').pipe(finalize(()=>this.isComplete.set(true))),
        {initialValue: {} as ResponseSupplierDropDown}

    )
}
}
