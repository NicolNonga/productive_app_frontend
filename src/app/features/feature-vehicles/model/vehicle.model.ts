import { FormControl } from "@angular/forms"
import { User } from "../../../core/model/user-authentication.model"
import { VehicleType } from "../../feature-configuration/model/vehicle_type.model"

export interface Vehicle {
     id: number
     brand: string
     model : string
     year : string
     vehicleTypeId: number
     userId: number
     createdAt: Date
     updatedAt: Date
     user : User
     vehicleType: VehicleType
}
export interface ResponseVehicle{
    data : Vehicle []
}

export interface VehicleForm{
    brand : FormControl<string | null>
    model : FormControl<string | null>
    year: FormControl<string | null>
    vehicle_type_id : FormControl<number | null>
}
