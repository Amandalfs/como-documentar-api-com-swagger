import { User } from "../entities/user";
import { IRepositoryUser } from "./interfaceRepository";

export class UserRepositoryInMemory implements IRepositoryUser {

    users: User[] = []
    
    add(user: User){
        this.users.push(user)
    }
    remove(id: string): void {
        const index = this.users.findIndex((user)=>{
            return user.id == id;
        })
        this.users.splice(index, 1)
    }
    findMany(): User[] {
        return this.users
    }
    findById(id: string) {
        return this.users.find((user)=>{
            if(id === user.id){
                return user;
            } 
        })
    }
    findByEmail(email: string) {
        return this.users.find((user)=>{
            if(email === user.email){
                return user;
            } 
        })
    }
}