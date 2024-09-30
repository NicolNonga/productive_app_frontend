import { FormControl } from "@angular/forms"

export interface Supplier {
    id: number
    name: string
    email: string
    address: string
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
}
export interface ResponseSupplier {
    data : Supplier []
}

export interface SupplierForm {
  name : FormControl<string | null>
  email : FormControl<string  | null>
  address: FormControl<string | null>
  phoneNumber : FormControl<String | null>
}

export interface SupplierDropDown{
       name: string
       id : number
}
export interface ResponseSupplierDropDown{
    data : SupplierDropDown []
}
