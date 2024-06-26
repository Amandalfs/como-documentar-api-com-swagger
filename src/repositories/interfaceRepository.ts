import { User } from "../entities/user";

export interface IRepositoryUser {
    add(user: User): void
    remove(id: string): void
    findMany(): User[]
    findById(id: string)
    findByEmail(email: string)
}