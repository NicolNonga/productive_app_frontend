import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, inject, input, Output, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Supplier, SupplierForm } from '../../model/supplier.model';
import { SupplierHttpService } from '../../services/supplier-http.service';

@Component({
  selector: 'app-create-or-edit-supplier',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-or-edit-supplier.component.html',
  styleUrl: './create-or-edit-supplier.component.css'
})
export class CreateOrEditSupplierComponent {
    public isSubmitted : boolean = false
    public supplierForm!: FormGroup
    @Output () supplierCreatedOrEdit = new EventEmitter<any>()
    public supplierValue = input<Supplier>({} as Supplier)
    public supplierHttpService = inject(SupplierHttpService)
    constructor(){
        this.createForm()
        effect(()=>{
            this.supplierForm.patchValue({
                name: this.supplierValue().name,
                email : this.supplierValue().email,
                phoneNumber: this.supplierValue().phoneNumber,
                address: this.supplierValue().address
            })
        })
    }

    createForm(){
        this.supplierForm= new FormGroup<SupplierForm>({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            phoneNumber: new FormControl('', Validators.required)
        })
    }
    get control(){
      return   this.supplierForm.controls
    }
    createSupplier(){
        this.isSubmitted = true
        if(this.supplierForm.invalid) return
        this.supplierHttpService.Post("supplier", this.supplierForm.value).subscribe((res)=> {
            this.supplierForm.reset()
            this.isSubmitted = false
            this.supplierCreatedOrEdit.emit(this.supplierForm.value)
        })
    }
    public updateSupplier(){
        if(this.supplierValue()){
            this.supplierHttpService.put('supplier', this.supplierForm.value, this.supplierValue().id).subscribe((res)=>{
                this.supplierCreatedOrEdit.emit(this.supplierForm.value)
            })
        }
    }

    public validateForm(){
        this.isSubmitted = true

    }

    public resetForm(){
         this.supplierForm.reset()
    }
}
