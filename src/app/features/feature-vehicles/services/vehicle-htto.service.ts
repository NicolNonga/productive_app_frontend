import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../core/http/http-handle.service";
import { ResponseVehicle } from "../model/vehicle.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { finalize } from "rxjs";
import { ResponseVehicleTypeDropDwon } from "../../feature-configuration/model/vehicle_type.model";

@Injectable({
    providedIn: 'root'
})
export  class VehicleHttpService  extends HttpHandleService{
  public isComplete= signal(false)

  public toSignalVehicle(): Signal<ResponseVehicle>{
    return toSignal(
        this.GetAll<ResponseVehicle>('vehicles').pipe(finalize(()=>this.isComplete.set(true))),
        {initialValue: {} as ResponseVehicle}

    )
  }
  public selectVehicleType():Signal<ResponseVehicleTypeDropDwon>{
    return toSignal(
        this.GetAll<ResponseVehicleTypeDropDwon>('vehicle_type/dropdown').pipe(finalize(()=>this.isComplete.set(true))),
        {initialValue: {} as ResponseVehicleTypeDropDwon}

    )
  }

}
