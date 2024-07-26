import { CommonModule, NgClass } from "@angular/common";
import { Component, EventEmitter, Output, effect, input } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { UsersHttpService } from "../../services/hptt/users-http.service";
import { UserForm, userInterface } from "../../model/user.model";

@Component({
  selector: "app-create-or-edit-users",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: "./create-or-edit-users.component.html",
  styleUrl: "./create-or-edit-users.component.css",
})
export class CreateOrEditUsersComponent {
  public isSubmitted: boolean = false;
  public userFormGroup!: FormGroup;
  @Output() userCreated = new EventEmitter<any>();
  public userValues = input<userInterface>()
  constructor(private userService: UsersHttpService) {
    this.createForm();
  }

  createForm() {
    this.userFormGroup = new FormGroup<UserForm>({
      name: new FormControl("", { nonNullable: true }),
      email: new FormControl("", { nonNullable: true }),
      telefone: new FormControl("", { nonNullable: true }),
      username: new FormControl("", { nonNullable: true }),
      address: new FormControl("", { nonNullable: true }),
    });
  }
  get control() {
    return this.userFormGroup.controls;
  }

  validateForm() {
    this.isSubmitted = true;
  }

  createUser() {
    this.isSubmitted = true;
    if (this.userFormGroup.invalid) {
      return;
    }
    this.userService.create(this.userFormGroup.value).subscribe((res: any) => {
      if (res) {
        this.userCreated.emit(this.userFormGroup.value);
        this.userFormGroup.reset();
      }
    });
  }
  editUser(){
    effect(()=> {
      
    })
  }
}
