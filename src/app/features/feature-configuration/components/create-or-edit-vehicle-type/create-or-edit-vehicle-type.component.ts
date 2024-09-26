import { Component, effect, EventEmitter, inject, input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehicleType, VehicleTypeForm } from '../../model/vehicle_type.model';
import { VehicleTypeHttpService } from '../../services/vehicle-type-http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-or-edit-vehicle-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-or-edit-vehicle-type.component.html',
  styleUrl: './create-or-edit-vehicle-type.component.css'
})
export class CreateOrEditVehicleTypeComponent {
    public isSubmitted : boolean = false
    public vehicleTypeForm! : FormGroup
    @Output () vehicleTypeCreatedOrEdit = new EventEmitter<any> ()
    public vehiculeTypeValue = input<VehicleType>( {} as VehicleType)
    public vehiculeHttpService = inject(VehicleTypeHttpService)

    constructor(){ this.createForm()
        effect(()=> {
            this.vehicleTypeForm.patchValue({
                type: this.vehiculeTypeValue().type,
                description: this.vehiculeTypeValue().description
            })
        })
    }

    get control(){
        return this.vehicleTypeForm.controls
    }
    createForm(){
        this.vehicleTypeForm = new FormGroup<VehicleTypeForm>({
            type: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        })
    }
    createVehicleType(){
        this.isSubmitted = true
        if(this.vehicleTypeForm.invalid) return
        this.vehiculeHttpService.Post('vehicle_type', this.vehicleTypeForm.value).subscribe((res)=>{
            this.vehicleTypeForm.reset()
            this.isSubmitted = false
            this.vehicleTypeCreatedOrEdit.emit(this.vehicleTypeForm.value)
        })
    }

  public updateVehicleType(){
    if(this.vehiculeTypeValue()){
        this.vehiculeHttpService.put('vehicle_type', this.vehicleTypeForm.value, this.vehiculeTypeValue().id).subscribe((res)=> {
            this.vehicleTypeCreatedOrEdit.emit(this.vehicleTypeForm.value)
        })
    }
  }
  public validateForm(){
    this.isSubmitted = true
  }
}
