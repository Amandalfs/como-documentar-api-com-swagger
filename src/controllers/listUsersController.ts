import { User } from '../entities/user';
import { ListUsersUseCase } from '../useCases/listUsersUseCase';

interface RequestListUsersController {}

interface ResponseListUsersController {
    users: User[]
}

export class ListUsersController{
    constructor(private listUsersUseCase: ListUsersUseCase){}

    execute({}:  RequestListUsersController): ResponseListUsersController{
        const { users } = this.listUsersUseCase.execute({})
        return {users}
    }
}