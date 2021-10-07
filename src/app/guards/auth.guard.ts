import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _cookie: CookieService, private _router : Router){}

  canActivate(){
    var cookie = this._cookie.get("user");
    if(cookie){
      return true;
    }
    else{
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
export class AfterLogin implements CanActivate {

  constructor(private _cookie: CookieService, private _router : Router){}

  canActivate(){
    var cookie = this._cookie.get("user");
    if(!cookie){
      return true;
    }
    else{
      this._router.navigate(["/home"]);
      return false;
    }
  }
  
}
