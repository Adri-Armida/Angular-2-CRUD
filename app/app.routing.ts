import { NgModule }       from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './webs/home.component';
import { NuevoUsuarioComponent } from './users/nuevousuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuevousuario', component: NuevoUsuarioComponent }
];

/*export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);*/
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}

