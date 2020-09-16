import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {AuthGuard} from '../app/auth.guard';
import { TemplateformComponent } from './Components/templateform/templateform.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import {ParentCompComponent} from './Components/parent-comp/parent-comp.component';
import {ChildCompComponent} from './Components/child-comp/child-comp.component';

import { MultiCheckComponent } from './Components/multi-check/multi-check.component';


const routes: Routes = [
  {path:'*', redirectTo:'/Userlist', pathMatch:'full'},
  {path:'UserList', component: UserListComponent},
  {path:'UserList/:Id', component: UserDetailsComponent},
  {path:'AddUser',component: AddUserComponent},
  {path:'UserTempForm',component: TemplateformComponent},
  {path:'Login',component:  LoginComponent},
  {path:'DashBoard',canActivate:[AuthGuard],component: DashboardComponent},
  {path:'ReactiveForm',component:ReactiveFormComponent},
  {path:'ParentCompComponent',component:ParentCompComponent},
  {path:'MultiCheck',component:MultiCheckComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
