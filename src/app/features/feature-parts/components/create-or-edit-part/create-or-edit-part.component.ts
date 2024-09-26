import { Component, EventEmitter, inject, input, Output, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Part, PartForm } from '../../model/part.model';
import { PartHttpService } from '../../service/part-http.service';
import { ResponseTypePart, ResponseTypePartDropDwon } from '../../../feature-configuration/model/type_part.model';
import { TypePartHttService } from '../../../feature-configuration/services/type-part-http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-or-edit-part',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-or-edit-part.component.html',
  styleUrl: './create-or-edit-part.component.css'
})
export class CreateOrEditPartComponent {
    public isSubmitted: boolean = false
    public partForm !: FormGroup
    public fileSelected : File | null = null
    @Output() partCreatedOrEdited = new EventEmitter<any>()
    public partValues = input<Part>({} as Part)
    public partHttpService = inject(PartHttpService)
    public typePartHttpserve = inject(TypePartHttService)
     public typeParts!:Signal<ResponseTypePartDropDwon>
     constructor(){
        this.createForm()
        this.typeParts =  this.typePartHttpserve.toSignalTypePartSelect()
     }
     createForm(){
        this.partForm = new FormGroup<PartForm>({
              nome: new FormControl('', Validators.required),
              reference : new FormControl('', Validators.required),
              type_part_id: new FormControl('', Validators.required),
              description : new FormControl('', Validators.required),
              price : new FormControl(null, Validators.required)
        })
     }
     get control(){
        return this.partForm.controls
     }

     onFileSelected(event : Event){

        const inputFile = event.target as HTMLInputElement

        if(inputFile.files ){
            this.fileSelected = inputFile.files[0]
        }
        console.log(this.fileSelected)
     }

     createPart(){
        this.isSubmitted= true
        console.log(this.partForm.value)
        if(this.partForm.invalid) return
        if(!this.fileSelected) {
            alert('Seleciona o Ficheiro')
            return
        }
        const formData = new FormData()
        formData.append('file', this.fileSelected)
        formData.append('nome',  this.partForm.get("nome")?.value )
        formData.append('reference',  this.partForm.get("reference")?.value )
        formData.append('type_part_id',  this.partForm.get("type_part_id")?.value )
        formData.append('description',  this.partForm.get("description")?.value )
        formData.append('price',  this.partForm.get("price")?.value )
        this.partHttpService.Post("parts", formData).subscribe((res)=>{
            this.partForm.reset()
            this.isSubmitted = false
            this.partCreatedOrEdited.emit(this.partForm.value)
        })
     }

     public updatePart(){
        // todo
        if(this.partValues()){

        }
     }
}
