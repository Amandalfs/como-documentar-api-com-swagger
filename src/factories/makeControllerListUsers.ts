import { ListUsersController } from "../controllers/listUsersController";
import { UserRepositoryInMemory } from "../repositories/userRepositoryInMemory";
import { ListUsersUseCase } from "../useCases/listUsersUseCase";


export function makeControllerListUsers(){
    const userRepository = new UserRepositoryInMemory();
    const listUsersUseCase = new ListUsersUseCase(userRepository);
    const controller = new ListUsersController(listUsersUseCase);
    return controller
}