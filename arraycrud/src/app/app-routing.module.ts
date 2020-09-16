import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AddComponent} from './component/add/add.component';

const routes: Routes = [ {path:  "", pathMatch:  "full",redirectTo:  "home"},
{path: "Home", component: HomeComponent},
{path: "Add", component: AddComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
