import { FormControl } from "@angular/forms"
import { userInterface } from "../../feature-acess-control/model/user.model"
import { VehicleTypeDropDown } from "./vehicle_type.model"

export interface TypePart {
    id: number
    type: string
    description: string
userId: number
    createdAt: Date
    updatedAt: Date
    user : userInterface
}

export interface ResponseTypePart {
    data : TypePart []
}
export interface TypePartForm {
      type: FormControl<string | null>
      description: FormControl<string | null>
}

export interface TypePartSelect extends VehicleTypeDropDown {

}
export interface ResponseTypePartDropDwon {
    data : TypePartSelect []
}
