import { randomUUID } from "crypto"

interface UserProps {
    name: string,
    email: string
}

export class User {
    private _name: string
    private _email: string
    private _id: string

    constructor({ name, email }: UserProps, id?: string){
        this._name = name
        this._email = email
        this._id = id ?? randomUUID()
    }

    get name(): string {
        return this._name
    }

    get id(): string {
        return this._id;
    }

    get email(): string {
        return this._email
    }
}