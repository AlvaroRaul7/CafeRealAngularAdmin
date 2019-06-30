import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './secundarias/admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './secundarias/registration/registration.component';

const rutas: Routes = [
 { path: '', component: LoginComponent },
 { path: 'admin', component: AdminComponent },
 { path: 'register', component: RegistrationComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(rutas)],
  declarations: [ AppComponent, LoginComponent, AdminComponent, RegistrationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
