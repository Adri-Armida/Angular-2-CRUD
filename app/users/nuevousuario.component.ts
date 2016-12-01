import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'user-form',
  styleUrls: ['./app/users/nuevousuario.component.css'], 
 templateUrl: './app/users/nuevousuario.component.html'
})
export class NuevoUsuarioComponent {
    private router: Router;
@Output() userCreated = new EventEmitter();
    newUser: User = new User();
  active: boolean = true;

 constructor(private userService:UserService){
 }

  onSubmit() {
    this.userCreated.emit({ user : this.newUser });

    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
    
    
  }

  createUser(newUser){
    if(newUser.coche)
        newUser.coche = "si"
    else
        newUser.coche = "no"
      
    this.userService.addUserService(newUser);
      
  }
}