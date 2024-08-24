import { FormControl } from "@angular/forms";
import { RoleInterface } from "./role.model";


export class UserModel {
  data!: userInterface;
  //role!: RoleInterface;
}

export interface userInterface {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  firstAcess:boolean
  roleId: number
  role? :  RoleInterface
  createdAt: Date
  updatedAt: Date
}

export interface ResponseUsers {
  data: userInterface [];
}


export interface UserForm {
  fullName: FormControl<string | null>;
  email: FormControl<string | null>;
  phone_number: FormControl<string | null>;
  roleId: FormControl<string | null>;
}
