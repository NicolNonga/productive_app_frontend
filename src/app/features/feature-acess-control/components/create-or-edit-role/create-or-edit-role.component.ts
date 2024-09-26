import { Component, effect, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoleFormCreate } from '../../model/role.model';
import { RoleHttpService } from '../../services/hptt/roles-http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-or-edit-role',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-or-edit-role.component.html',
  styleUrl: './create-or-edit-role.component.css'
})
export class CreateOrEditRoleComponent {
    public isSubmitted: boolean = false
    public roleFormGroup!:FormGroup;
    public roleHttpService = inject(RoleHttpService)
     @Output() roleCreated = new EventEmitter<any>()
    constructor(){
        this.createForm()

    }


private createForm(){
    this.roleFormGroup = new FormGroup<RoleFormCreate>({
        name : new FormControl("", Validators.required),
        description: new FormControl('', Validators.required)
    })
}
get control(){
    return this.roleFormGroup.controls
}
createRole(){
    this.isSubmitted = true
    if(this.roleFormGroup.invalid) return
    this.roleHttpService.Post("roles", this.roleFormGroup.value).subscribe((res)=>{
        this.roleCreated.emit(this.roleFormGroup.value)
    })
}
}
