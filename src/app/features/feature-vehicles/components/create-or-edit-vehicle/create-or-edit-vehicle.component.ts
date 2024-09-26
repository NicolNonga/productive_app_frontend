import { Component, effect, EventEmitter, inject, input, Output, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vehicle, VehicleForm } from '../../model/vehicle.model';
import { VehicleTypeHttpService } from '../../../feature-configuration/services/vehicle-type-http.service';
import { VehicleHttpService } from '../../services/vehicle-htto.service';
import { ResponseVehicleTypeDropDwon } from '../../../feature-configuration/model/vehicle_type.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-or-edit-vehicle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-or-edit-vehicle.component.html',
  styleUrl: './create-or-edit-vehicle.component.css'
})
export class CreateOrEditVehicleComponent {
    public isSubmitted: boolean = false
    public vehicleForm! : FormGroup
    @Output () vehicleCreatedOrEdited = new EventEmitter<any> ()
    public vehicleValue = input<Vehicle> ({} as Vehicle)
    public vehicleHttpService = inject(VehicleHttpService)
    public vehicleTypeList!: Signal<ResponseVehicleTypeDropDwon>

    constructor(){
        this.createForm()
        this.vehicleTypeList = this.vehicleHttpService.selectVehicleType()
        effect(()=>{
            this.vehicleForm.patchValue({
                brand : this.vehicleValue().brand,
                model : this.vehicleValue().model ,
                year :  this.vehicleValue().year,
                vehicle_type_id: this.vehicleValue().id
            })
        })

    }
    createForm(){
        this.vehicleForm = new FormGroup<VehicleForm>({
            brand : new FormControl('', Validators.required),
            model:  new FormControl('', Validators.required),
            year: new FormControl('', Validators.required),
            vehicle_type_id:  new FormControl(null, Validators.required)

        })
    }
    get control() {
        return this.vehicleForm.controls
    }

    createVehicle(){
        this.isSubmitted = true
        if(this.vehicleForm.invalid) return
        this.vehicleHttpService.Post('vehicles', this.vehicleForm.value).subscribe((res)=>{
            this.vehicleForm.reset()
            this.isSubmitted = false
            this.vehicleCreatedOrEdited.emit(this.vehicleForm.value)
        })
    }
    public updateVehicle(){
        if(this.vehicleValue()){
            this.vehicleHttpService.put('vehicles', this.vehicleForm.value, this.vehicleValue().id).subscribe((res)=>{
                this.vehicleForm.reset()
                this.isSubmitted = false
                this.vehicleCreatedOrEdited.emit(this.vehicleForm.value)
            })
        }
    }
}
