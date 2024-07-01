import { User } from '../entities/user';
import { UserByIdUseCase } from '../useCases/userByIdUseCase';

interface RequestAddUserController {
    id: string
}

interface ResponseAddUserController {
    user: User
}

export class UserByIdController{
    constructor(private userByIdUseCase: UserByIdUseCase){}

    execute({ id }: RequestAddUserController): ResponseAddUserController{
        const {user} = this.userByIdUseCase.execute({id})
        return {user}
    }
}