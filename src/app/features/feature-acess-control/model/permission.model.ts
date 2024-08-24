import { FormControl } from "@angular/forms"

export interface PermissionInterface{
    id: number
    name: string
    description:string | null
    createdAt: Date
    updatedAt: Date
    isActive:boolean
}

export interface ResponsePermissions {
    data: PermissionInterface []
}

export interface PermissionPayload {
    name: string
    description: string 
}
export interface permissionForm {
    name : FormControl<string | null>
    description: FormControl<string | null>
}

