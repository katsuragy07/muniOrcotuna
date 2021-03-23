import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from 'src/app/models/login.model';
import { PanelLoginService } from './panel-login.service';
import { AuthService } from "src/app/panel/auth.service";


@Component({
  selector: 'app-panel-login',
  templateUrl: './panel-login.component.html',
  styleUrls: ['./panel-login.component.css']
})
export class PanelLoginComponent implements OnInit {

  login: Login;
  estado: number;

  constructor(private router: Router, private auth: AuthService, private service: PanelLoginService) {
    this.login = new Login();
   }

   
  ngOnInit(){
    if(this.auth.getCredenciales()){
      this.router.navigate(['panel']);
    }
  }


  submit(formulario){
    console.log(this.login);
    
    this.service.login(this.login).subscribe(
      res => {
        
        this.estado = res.status;

        switch(res.status){
          case 200:   formulario.resetForm();
                      const token = res.res;
                      //var decoded = jwt_decode(token); 
                      //console.log(decoded); 
                      //var currentUser = JSON.stringify({bearer: token});
                      localStorage.setItem('token', token);
                      //this.router.navigate(['/panel']);
                      document.location.href = '/panel';
                      break;

          case 500:   console.log(res);
                      break;

          case 404:   console.log(res);
                      break;

        }
       
      },
      err => {
        console.log(err);
      }
    );

  
    return false;
  }

}
