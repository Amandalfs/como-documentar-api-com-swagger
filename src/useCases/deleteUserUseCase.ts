import { ErrorStatus } from "../@shared/error";
import { User } from "../entities/user";
import { IRepositoryUser } from "../repositories/interfaceRepository";

interface RequestDeleteUserUseCase {
    id: string,
}

interface ResponseDeleteUserUseCase {
    user: User
}

export class DeleteUserUseCase {
    constructor(private UserRepository: IRepositoryUser){}

    execute({id}: RequestDeleteUserUseCase): ResponseDeleteUserUseCase{
        
        const user = this.UserRepository.findById(id)

        if(!user){
            throw new ErrorStatus("esse usuario não existe", 404);
        }

        this.UserRepository.remove(id)
        return {user}
    }
}