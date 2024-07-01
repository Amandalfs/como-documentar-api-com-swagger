import { UserByIdController } from "../controllers/userByIdController";
import { UserRepositoryInMemory } from "../repositories/userRepositoryInMemory";
import { UserByIdUseCase } from "../useCases/userByIdUseCase";

export function makeControllerUserById(){
    const userRepository = new UserRepositoryInMemory();
    const userByIdUseCase = new UserByIdUseCase(userRepository);
    const controller = new UserByIdController(userByIdUseCase);
    return controller
}