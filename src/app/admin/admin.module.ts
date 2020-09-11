import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AdminComponent, UsersComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
