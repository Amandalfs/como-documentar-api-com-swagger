import { AddUserController } from "../controllers/addUserController";
import { UserRepositoryInMemory } from "../repositories/userRepositoryInMemory";
import { AddUserUseCase } from "../useCases/addUserUseCase";

export function makeControllerUser(){
    const userRepository = new UserRepositoryInMemory();
    const addUserUseCase = new AddUserUseCase(userRepository);
    const controller = new AddUserController(addUserUseCase);
    return controller
}