import { User } from '../entities/user';
import { DeleteUserUseCase } from '../useCases/deleteUserUseCase';

interface RequestDeleteUserController {
    id: string
}

interface ResponseDeleteUserController {
    user: User
}

export class DeleteUserController{
    constructor(private deleteUserUseCase: DeleteUserUseCase){}

    execute({ id }: RequestDeleteUserController): ResponseDeleteUserController{
        const {user} = this.deleteUserUseCase.execute({id})
        return {user}
    }
}