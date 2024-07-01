import { DeleteUserController } from "../controllers/deleteUserController";
import { UserRepositoryInMemory } from "../repositories/userRepositoryInMemory";
import { DeleteUserUseCase } from "../useCases/deleteUserUseCase";

export function makeControllerDeleteUser(){
    const userRepository = new UserRepositoryInMemory();
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);
    const controller = new DeleteUserController(deleteUserUseCase);
    return controller
}