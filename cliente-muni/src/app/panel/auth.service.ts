import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';
import { TokenClaim } from 'src/app/models/token_claims.model';
import { ServiceStatus } from 'src/app/models/service_status.model';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public usuario: TokenClaim;
  URI = GlobalConstants.apiURL;

  constructor(private router: Router, private http: HttpClient) { }


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



  getClaims(){
    let params = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    return this.http.get<ServiceStatus>(this.URI+'decodificar_token.php', {params:params});
  }

  removeToken(){
    localStorage.removeItem('token');
  }

  validarToken(){
    let params = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    return this.http.get<TokenClaim>(this.URI+'validar_token.php', {params:params});
  }

  validarTokenPromise(){
    let params = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    return new Promise<TokenClaim>( (resultado) => {
      this.validarToken().subscribe(
        res => {
          this.usuario = res;
          resultado(res);
        }
      )
    });
  }


  validarURL(url){
    switch(url){
      case "/panel": return true;

      case "/panel/usuarios": if(this.usuario.res.privilegios=="ADMINISTRADOR"){ return true }else{ return false } break;
      case "/panel/areas": if(this.usuario.res.privilegios=="ADMINISTRADOR"){ return true }else{ return false } break;
      case "/panel/tramites/pendientes": return true;
      case "/panel/tramites/finalizados": return true;
      case "/panel/tramites/rechazados": return true;

      case "/panel/general": if(this.usuario.res.accesos.general){ return true; }else{ return false; } break; 
      case "/panel/portada": if(this.usuario.res.accesos.portadas){ return true; }else{ return false; } break; 
      case "/panel/noticias": if(this.usuario.res.accesos.noticias){ return true; }else{ return false; } break; 
      case "/panel/anuncios": if(this.usuario.res.accesos.anuncios){ return true; }else{ return false; } break; 
      case "/panel/resoluciones": if(this.usuario.res.accesos.resoluciones){ return true; }else{ return false; } break; 
      case "/panel/convocatorias": if(this.usuario.res.accesos.convocatorias){ return true; }else{ return false; } break; 

      default: return false;
    }
  }



}
