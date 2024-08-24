import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PermissionHttpService } from '../../../services/hptt/permission.http.service';
import { permissionForm } from '../../../model/permission.model';

@Component({
  selector: 'app-create-or-edit-permission',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass, NgFor],
  templateUrl: './create-or-edit-permission.component.html',
  styleUrl: './create-or-edit-permission.component.css'
})
export class CreateOrEditPermissionComponent {
public isSubmitted: boolean = false
public permissionForms!:FormGroup
@Output() permissionCreated = new EventEmitter<any> ()
public permissionHttpService = inject(PermissionHttpService)

constructor(){
  this.createForm()
}


createForm(){
  this.permissionForms = new FormGroup<permissionForm>({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  })
}

 get control(){
  return this.permissionForms.controls
 }

 public validateForm(){
  this.isSubmitted = true
 }
 createPermission(){
  this.isSubmitted = true
  if(this.permissionForms.invalid) return

  this.permissionHttpService.createPermission(this.permissionForms.value).subscribe((res)=> {
      this.permissionCreated.emit(this.permissionForms.value)
      this.permissionForms.reset()
      this.isSubmitted = false
  })
 }
}
