import { ResponseTypePart, TypePart, TypePartForm } from "./type_part.model";

export interface VehicleType  extends TypePart{

}


export interface ResponseVehicleType extends ResponseTypePart {

}

export interface VehicleTypeForm extends TypePartForm {

}
export type  VehicleTypeDropDown = {
    id: number
    type: string
}
export interface ResponseVehicleTypeDropDwon {
    data : VehicleTypeDropDown []
}
