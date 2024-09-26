import { Injectable, signal, Signal } from "@angular/core";
import { HttpHandleService } from "../../../core/http/http-handle.service";
import { ResponseVehicleType } from "../model/vehicle_type.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { finalize } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class VehicleTypeHttpService extends HttpHandleService {
 public isComplete = signal(false)

    public toSignalVehicleType(): Signal<ResponseVehicleType> {
        return toSignal(
            this.GetAll<ResponseVehicleType>('vehicle_type').pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: {} as ResponseVehicleType}

        )
    }
}
