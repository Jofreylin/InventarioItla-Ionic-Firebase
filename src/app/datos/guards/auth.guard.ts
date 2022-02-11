import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authSvc: AuthService, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean 
    | UrlTree {
      if(this.authSvc.isLogged){
        return true;
      }else{
        console.log('Necesita iniciar sesion');
        this.router.navigate(['/login']);
        return false;
      }

    //return false;
  }
  
}