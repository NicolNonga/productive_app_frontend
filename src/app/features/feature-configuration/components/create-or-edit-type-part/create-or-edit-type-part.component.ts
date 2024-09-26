import { Component, effect, EventEmitter, inject, input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TypePartHttService } from '../../services/type-part-http.service';
import { TypePart, TypePartForm } from '../../model/type_part.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-create-or-edit-type-part',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './create-or-edit-type-part.component.html',
    styleUrl: './create-or-edit-type-part.component.css'
})
export class CreateOrEditTypePartComponent {
    public isSubmitted: boolean = false
    public typePartForm!: FormGroup
    @Output() typePartCreatedOEdit = new EventEmitter<any>()
    public typePartValues = input<TypePart>({} as TypePart)
    public typePartHttpserve = inject(TypePartHttService)
    constructor() {
        this.createform()
        effect(()=> {
            this.typePartForm.patchValue({
                type: this.typePartValues().type,
                description: this.typePartValues().description
            })
        })
    }

    createform() {
        this.typePartForm = new FormGroup<TypePartForm>({
            type: new FormControl("", Validators.required),
            description: new FormControl("", Validators.required)
        })
    }

    get control() {
        return this.typePartForm.controls
    }

    validateForm() {
        this.isSubmitted = true
    }

    createTypePart() {
        this.isSubmitted = true
        if (this.typePartForm.invalid) return
        this.typePartHttpserve.Post('type_parts', this.typePartForm.value).subscribe((res) => {
            this.typePartForm.reset()
            this.isSubmitted= false
            this.typePartCreatedOEdit.emit(this.typePartForm.value)
        })
    }


    updateTypePart(){
         console.log(this.typePartValues())
         if(this.typePartValues()){
             this.typePartHttpserve.put('type_parts', this.typePartForm.value, this.typePartValues().id).subscribe((res)=>{
                this.typePartCreatedOEdit.emit(this.typePartValues())

             })
         }

    }
}
