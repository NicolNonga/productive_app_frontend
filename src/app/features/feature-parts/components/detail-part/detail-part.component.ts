import { Component, effect, inject, input, Signal } from '@angular/core';
import { Part, PartForm } from '../../model/part.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PartHttpService } from '../../service/part-http.service';

@Component({
  selector: 'app-detail-part',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './detail-part.component.html',
  styleUrl: './detail-part.component.css'
})
export class DetailPartComponent {
    public partForm !: FormGroup
    public isSubmitted: boolean = false
    public partValues = input<Part>({} as Part)
    public partHttpService = inject(PartHttpService)
    public url!:string
    constructor(){
        this.createForm()



       effect(()=>{
        if(this.partValues().fileName){
            console.log(this.partValues())
           // this.partFileDownload = this.partHttpService.downloadImgPart(this.partValues().fileName)
            this.url = `http://localhost:3333/parts/download/file/${this.partValues().fileName}`
            console.log(this.url)
        }
        this.partForm.patchValue({
            nome : this.partValues().nome,
            reference : this.partValues().reference,
            price: this.partValues().price,
            description : this.partValues().description
        })
       })

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
}
