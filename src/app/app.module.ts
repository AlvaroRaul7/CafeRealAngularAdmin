import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './secundarias/admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './secundarias/registration/registration.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import{AdminModule, routesComponent} from './secundarias/admin/admin.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


const rutas: Routes = [
 { path: '', component: LoginComponent },
 { path: 'admin', component: AdminComponent },
 { path: 'register', component: RegistrationComponent}
];

@NgModule({
  imports:      [ BrowserModule,AdminModule,MDBBootstrapModule.forRoot(), FormsModule, RouterModule.forRoot(rutas),AngularFontAwesomeModule],
  declarations: [ AppComponent, LoginComponent, AdminComponent, RegistrationComponent, routesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
