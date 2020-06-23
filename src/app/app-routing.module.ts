import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AuthService} from './auth.service';




const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthService],
  children: [{
    path: 'member',
    component: AddmemberComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
]},
  {

  path:'',
  component:LoginComponent
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
