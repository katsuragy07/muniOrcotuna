import { Injectable } from '@angular/core';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router) { }


  getCredenciales(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
