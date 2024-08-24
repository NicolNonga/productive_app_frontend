import { CommonModule, NgClass, NgFor } from "@angular/common";
import { Component, EventEmitter, Output, Signal, effect, inject, input } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { UsersHttpService } from "../../services/hptt/users-http.service";
import { UserForm, userInterface } from "../../model/user.model";
import { RoleHttpService } from "../../services/hptt/roles-http.service";
import { RoleDropDownList } from "../../../../core/model/role.model";

@Component({
  selector: "app-create-or-edit-users",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass, NgFor],
  templateUrl: "./create-or-edit-users.component.html",
  styleUrl: "./create-or-edit-users.component.css",
})
export class CreateOrEditUsersComponent {
  public isSubmitted: boolean = false;
  public roleDropDownList!: Signal<RoleDropDownList>
  public userFormGroup!: FormGroup;
  @Output() userCreated = new EventEmitter<any>();
  public userValues = input<userInterface>()
  public roleHttpService = inject(RoleHttpService)
  constructor(private userService: UsersHttpService) {
    this.createForm();
    this.roleDropDownList = this.roleHttpService.toSignalDropDownList()
    
  }

  createForm() {
    this.userFormGroup = new FormGroup<UserForm>({
      fullName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      phone_number: new FormControl("", Validators.required),
      roleId: new FormControl(null,  Validators.required),
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
    console.log(this.userFormGroup.value)
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

}
