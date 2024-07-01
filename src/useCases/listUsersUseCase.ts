import { User } from "../entities/user";
import { IRepositoryUser } from "../repositories/interfaceRepository";

interface RequestListUsersUseCase {}

interface ResponseListUsersUseCase {
    users: User[]
}

export class ListUsersUseCase {
    constructor(private userRepository: IRepositoryUser){}

    execute({}:RequestListUsersUseCase): ResponseListUsersUseCase{
        const users = this.userRepository.findMany();
        return {
            users
        }
    }
}