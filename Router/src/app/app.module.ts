import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { UsertitlePipe } from './pipes/usertitle.pipe';
import { EmpListPipeFiletrComponent } from './emp-list-pipe-filetr/emp-list-pipe-filetr.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomeChildComponent,
    FormArrayComponent,
    UsertitlePipe,
    EmpListPipeFiletrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule 
  ],
  providers: [UsertitlePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
