import { FormControl } from "@angular/forms"
import { Supplier } from "../../feature-configuration/model/supplier.model"
import { Part } from "../../feature-parts/model/part.model"

export interface Stock {
    id: number
    quantity : number
    supplieId : number
    createdAt: Date
    updatedAt : Date
    part: Part
    supplier : Supplier

}

export interface ResponseStock {
    data : Stock []
}

export interface StockForm{
    quantity: FormControl<number | null>
    partId: FormControl<number | null>
    supplieId : FormControl<number | null>
}
