import { User } from "../../../core/model/user-authentication.model"

export interface Clients {
    id: number
    name: string
    address: string
    createdAt: Date
    updatedAt: Date
    userId: number
    email: string
    phoneNumber: string
    user : User
}

export interface ResponseClients{
    data:Clients []
}
