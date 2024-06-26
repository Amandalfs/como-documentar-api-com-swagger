import { User } from "../entities/user";
import { IRepositoryUser } from "../repositories/interfaceRepository";

interface RequestAddUserUseCase {
    name: string,
    email: string,
}

interface ResponseAddUserUseCase {
    user: User
}

export class AddUserUseCase {
    constructor(private UserRepository: IRepositoryUser){}

    execute({name, email}: RequestAddUserUseCase): ResponseAddUserUseCase{
        const user = new User({name, email})
        
        const alreadyEmail = this.UserRepository.findByEmail(email);

        if(alreadyEmail){
            throw new Error("esse email ja existe");
        }

        this.UserRepository.add(user)

        return {
            user 
        }
    }
}