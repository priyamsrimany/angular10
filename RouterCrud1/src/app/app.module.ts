import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule ,NgForm, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


import {AuthGuard} from '../app/auth.guard';
import {LoginDetailsService} from './Services/login-details.service';

import { TemplateformComponent } from './Components/templateform/templateform.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { CustomValidationDirective } from './Validator/custom-validation.directive';
import { ParentCompComponent } from './Components/parent-comp/parent-comp.component';
import { ChildCompComponent } from './Components/child-comp/child-comp.component';
import { MultiCheckComponent } from './Components/multi-check/multi-check.component';


import {ParentItem} from './Class/ParentItems';
import { TypeScriptComponent } from './Components/type-script/type-script.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    AddUserComponent,
    LoginComponent,
    DashboardComponent,
    TemplateformComponent,
    ReactiveFormComponent,
    CustomValidationDirective,
    ParentCompComponent,
    ChildCompComponent,
    MultiCheckComponent,
    TypeScriptComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,LoginDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
