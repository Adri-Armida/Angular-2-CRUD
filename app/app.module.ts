import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

import { AppRouting } from './app.routing';
import { HomeComponent } from './webs/home.component';
import { NuevoUsuarioComponent } from './users/nuevousuario.component';
import {UserService} from './user.service';

@NgModule({
 imports: [ 
 BrowserModule,
 FormsModule,
 AppRouting
 ],
    providers: [UserService],
 declarations: [ 
 AppComponent,
 HomeComponent,
 NuevoUsuarioComponent,
 ],
 bootstrap: [ AppComponent ]
})
export class AppModule {}