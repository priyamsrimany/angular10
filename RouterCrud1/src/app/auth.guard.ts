import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private routes: Router){};
  canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean
  {
    if(localStorage.getItem('username')!= null)
    {
      return true;
    }
    else{
      this.routes.navigate(['/Login']);
      return false;
    }
    
  }
  
}
