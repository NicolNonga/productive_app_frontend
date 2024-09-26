import { Component, EnvironmentInjector, inject, runInInjectionContext, signal, Signal } from '@angular/core';
import { ResponseVehicleType, VehicleType } from '../../model/vehicle_type.model';
import { TypePart } from '../../model/type_part.model';
import { VehicleTypeHttpService } from '../../services/vehicle-type-http.service';
import { CommonModule } from '@angular/common';
import { CreateOrEditVehicleTypeComponent } from '../create-or-edit-vehicle-type/create-or-edit-vehicle-type.component';

@Component({
  selector: 'app-list-vehicle-type',
  standalone: true,
  imports: [CommonModule, CreateOrEditVehicleTypeComponent],
  templateUrl: './list-vehicle-type.component.html',
  styleUrl: './list-vehicle-type.component.css'
})
export class ListVehicleTypeComponent {
    public vehicleType!:Signal<ResponseVehicleType>
    public vehicleTypeValue = signal<TypePart>({} as VehicleType)
    private vehicleTypeHttpService = inject(VehicleTypeHttpService)
    private environmentInjector =  inject(EnvironmentInjector)

    constructor(){
        this.vehicleType = this.vehicleTypeHttpService.toSignalVehicleType()
    }

    public realoadVehicleType() {
        runInInjectionContext(this.environmentInjector, ()=> {
            this.vehicleType = this.vehicleTypeHttpService.toSignalVehicleType()
        })
    }

    public setValueVehicleType(vehicle_type: VehicleType){
        this.vehicleTypeValue.set(vehicle_type)
    }

}
