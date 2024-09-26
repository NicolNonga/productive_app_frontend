import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject, runInInjectionContext, signal, Signal } from '@angular/core';
import { ResponseVehicle, Vehicle } from '../../model/vehicle.model';
import { VehicleHttpService } from '../../services/vehicle-htto.service';
import { CreateOrEditVehicleComponent } from '../create-or-edit-vehicle/create-or-edit-vehicle.component';

@Component({
  selector: 'app-list-vehicle',
  standalone: true,
  imports: [CommonModule, CreateOrEditVehicleComponent],
  templateUrl: './list-vehicle.component.html',
  styleUrl: './list-vehicle.component.css'
})
export class ListVehicleComponent {
   public vehicles !: Signal<ResponseVehicle>
   public vehicleValue = signal<Vehicle>({} as Vehicle)
   private vehicleHttpService = inject(VehicleHttpService)
   private environmentInjector = inject(EnvironmentInjector)
   constructor(){
    this.vehicles = this.vehicleHttpService.toSignalVehicle()
   }

   public reloadVehicles(){
     runInInjectionContext(this.environmentInjector, ()=>{
        this.vehicles= this.vehicleHttpService.toSignalVehicle()
     })
   }

   public setVehicle(vehicle: Vehicle){
    this.vehicleValue.set(vehicle)
   }
}
