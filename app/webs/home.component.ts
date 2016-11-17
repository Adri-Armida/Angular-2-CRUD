import { Component } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../user.service';
import { OnInit } from '@angular/core';

@Component({
 selector: 'my-app',
 templateUrl: './app/webs/home.component.html',
 styleUrls: ['./app/webs/home.component.css']
})

export class HomeComponent implements OnInit {
 message: string = 'Hello!';
 users: User[];

 constructor(private userService:UserService){
 }

ngOnInit(){
    this.getUsers();
}

getUsers(){
    this.userService.getUsers().then(usersreturn => this.users = usersreturn);
}


addUser(){
    
}

 activeUser: User;

 selectUser(user) {
   this.activeUser = user;
   console.log(this.activeUser);
 }
 
 deleteUser(user){
     this.users.forEach((u: User, i: number) => {
        if (u.dni === user.dni) {
          this.users.splice(i, 1);
        }
      });
 }
/*
 onUserCreated(event) {
    console.log(event.user.coche);
    if(event.user.coche)
        event.user.coche = "si"
    else
        event.user.coche = "no"
    this.users.push(event.user);
  }*/
}