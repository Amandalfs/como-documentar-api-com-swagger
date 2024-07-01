import { User } from "../entities/user";
import { IRepositoryUser } from "../repositories/interfaceRepository";

interface RequestUserByIdUseCase {
    id: string,
}

interface ResponseUserByIdUseCase {
    user: User
}

export class UserByIdUseCase {
    constructor(private UserRepository: IRepositoryUser){}

    execute({id}: RequestUserByIdUseCase): ResponseUserByIdUseCase{
        
        const user = this.UserRepository.findById(id)

        if(!user){
            throw new Error("esse usuario não existe");
        }

        return {user}
    }
}