import {Injectable} from '@angular/core';


import {User} from './shared/models/user';
import {USERS} from './mock-users';




@Injectable()
export class UserService {
    getUsers(): Promise<User[]>{
        return Promise.resolve(USERS);
    }
    
    addUserService(user: User): void{
        USERS.push(user);
    }
    
}