
import { User } from "../domain/user";
import { UserId } from "../domain/UserId";
import { UserNotFoundError } from "../domain/UserNotFoundError";
import { UserRepository } from "../domain/UserRepository";

export class UserService{
    constructor(private repository: UserRepository){}

    create(user: User): Promise<void>{
        return this.repository.create(user)
    }
    getAll(user: User): Promise<User[]>{
        return this.repository.getAll()
    }
    getOneById(id: UserId): Promise<User>{
        if (!id) throw new UserNotFoundError()
        return this.getOneById(id)
    }
    edit(user: User): Promise<void>{
        return this.edit(user)
    }
    delete(id: UserId): Promise<void>{
        return this.delete(id)
    }
}