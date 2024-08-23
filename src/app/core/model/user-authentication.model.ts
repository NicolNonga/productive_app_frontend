export class User {

    fullName!: string;
    email!:string;
    phoneNumber!: string;
    firstAcess!:boolean;
    isActive!:boolean;
    createdAt!: Date;
    id?: string;
    firstAccess?: boolean
    updatedAt?:Date


}

export class  Token {

    token?: string
    type!:string
    name!: string | null
    lastUsedAt: any
    expiresAt: any
    abilities! : Array<string>

}

export class AuthenticationModel {
    user!: User
    token!: Token
    deserialize(input: any): this {
        return Object.assign(this, input)
    }
}

export interface AuthPayload {
    username: string
    password: string
}