import { Component, inject, input, signal, Signal } from '@angular/core';
import { Vehicle } from '../../model/vehicle.model';
import { PartHttpService } from '../../../feature-parts/service/part-http.service';
import { VehicleHttpService } from '../../services/vehicle-htto.service';
import { Part } from '../../../feature-parts/model/part.model';

@Component({
  selector: 'app-add-part-to-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './add-part-to-vehicle.component.html',
  styleUrl: './add-part-to-vehicle.component.css'
})
export class AddPartToVehicleComponent {
    public vehicle= input.required<Vehicle>({alias: "vehicle"})
    partHttpService = inject(PartHttpService)
    public vehicleHttpService = inject(VehicleHttpService)
    public parts: Signal<Part [] | undefined> = signal<Part []>([])
    public checked = signal(false)

    constructor(){
        this.parts = this.partHttpService.toSignalPartAll()
    }

    checkValueExist(part_id: number){
        let check = false
        const vehileParts = this.vehicle().parts
         if(vehileParts){
            check =  vehileParts.some(item => item.id === part_id)
         }

         return check
    }

    checkValueChange(event:Event, part_id: number ){
        const checkbox = event.target as HTMLInputElement
        const ischecked = checkbox.checked
        const vehicle_id = this.vehicle().id
       if(ischecked) {
         console.log(vehicle_id)
         this.vehicleHttpService.Post("vehicle_part", {parts: [part_id], vehicleId: vehicle_id} ).subscribe((res)=>{
             console.log("sucesso")
         })
        return
       }

      this.vehicleHttpService.Post("vehicle_part/delete", {parts: [part_id], vehicleId: vehicle_id}).subscribe((res)=>{
        console.log("sucesso")
      })


     }

}
