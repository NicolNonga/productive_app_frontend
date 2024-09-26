import { FormControl } from "@angular/forms";
import { PermissionInterface } from "./permission.model";

export interface RoleInterface {
    id: number;
    name: string;
    description: string | null
    isActived:boolean
    createdAt: Date
    updatedAt: Date
    permission: PermissionInterface []
  }

  export interface ResponseRoles{
    data: RoleInterface []
  }
  export interface RoleDropDownList{
    data : RoleInterface []
  }

  export interface RoleFormCreate{
    name: FormControl<string | null>
    description: FormControl<string | null>

  }
