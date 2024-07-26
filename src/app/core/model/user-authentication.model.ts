export class User {

    username!: string;
    email!:string;
    telefone!: string;
    firstAcess!:boolean;
    isActive!:boolean;
    name!:string;
    createdAt!: Date;
    id?: string;
    password?: string


}

export class  Token {

    token?: string

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