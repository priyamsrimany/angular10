import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import{ FreeApiServices } from './Services/freeapi.services';


@NgModule({
  
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [FreeApiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
