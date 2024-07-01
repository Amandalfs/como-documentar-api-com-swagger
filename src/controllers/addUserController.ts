import { AddUserUseCase } from './../useCases/addUserUseCase';
import { User } from '../entities/user';

interface RequestAddUserController {
    name: string
    email: string
}

interface ResponseAddUserController {
    user: User
}

export class AddUserController{
    constructor(private addUserUseCase: AddUserUseCase){}

    execute({ email, name }: RequestAddUserController): ResponseAddUserController{
        const {user}= this.addUserUseCase.execute({email, name})
        return {user}
    }
}