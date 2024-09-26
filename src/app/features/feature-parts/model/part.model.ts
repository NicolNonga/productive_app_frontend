import { FormControl } from "@angular/forms"
import { User } from "../../../core/model/user-authentication.model"
import { TypePart } from "../../feature-configuration/model/type_part.model"

export interface Part{
    id: number
    nome: string
    description: string
    price : number
    reference: string
    typePartId: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    user: User
    typeParts: TypePart
}

export interface ResponsePart {
    data: Part []
}

export interface PartForm{
    nome : FormControl<string | null>
    reference: FormControl<string | null>
    type_part_id: FormControl<string | null>
    description : FormControl<string | null>
    price: FormControl<number | null>
}
