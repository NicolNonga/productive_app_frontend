import { FormControl } from "@angular/forms";

export class UserModel {
  user!: userInterface;
  //role!: RoleInterface;
}

export interface userInterface {
  id: string;
  name: string;
  username: string;
  email: string;
  telefone: string;
  is_active: boolean;
  updated_at: Date;
  created_at: Date;
  role : RoleInterface[]
}

export interface ResponseUsers {
  data: UserModel [];
}

export interface RoleInterface {
  id: string;
  name: string;
}

export interface UserForm {
  name: FormControl<string>;
  email: FormControl<string>;
  telefone: FormControl<string>;
  username: FormControl<string>;
  address: FormControl<string>;
}
