import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FormArrayComponent} from './form-array/form-array.component';
import { EmpListPipeFiletrComponent } from './emp-list-pipe-filetr/emp-list-pipe-filetr.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Registration', component: FormArrayComponent },
  {path: 'EmpListWithPipe', component:EmpListPipeFiletrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
