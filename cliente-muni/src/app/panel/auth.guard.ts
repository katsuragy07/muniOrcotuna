import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {  AuthService } from "./auth.service";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router){

  }
  

  async canActivate(){

    await this.auth.validarTokenPromise().then(res => {
      if(res.status==200){
        //console.log(res)
        //console.log("token valido");
        return true;
      }else{
        console.log("token invalido");
        this.auth.removeToken();
        this.router.navigate(['/login']);
        return false;
      }
    });
    return true;


  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //console.log("ruta child: "+this.auth.validarURL(state.url))
    if(this.auth.validarURL(state.url)){
      return true;
    }else{
      this.router.navigate(['/panel']);
      return false;
    }
  }
  
}
