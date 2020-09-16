import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {LoginDetailsService} from './../../Services/login-details.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private logServ:LoginDetailsService,private routes:Router) { }

  ngOnInit(): void {


  }
  Login(id: string,password: string): void
  {
     //alert(id+password);
     //this.AuthGuard.
     var output = this.logServ.CheckValidUser(id,password);
     if(output){
       this.routes.navigate(['/DashBoard']);
     }
     else{
       alert("Login failed");
     }
  }

}
