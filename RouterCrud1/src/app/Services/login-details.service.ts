import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  constructor() { }
  CheckValidUser(id: string, pass: string)
  {
    var islogginsuccess :boolean= false;
    if(id=="admin" && pass=="admin123")
    {
      localStorage.setItem('username','admin');
      islogginsuccess =true;
    }
    return islogginsuccess;
  }
}
