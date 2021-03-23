import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constans';
import { ServiceStatus} from 'src/app/models/service_status.model';

@Injectable({
  providedIn: 'root'
})
export class PanelIndexService {

  URI = GlobalConstants.apiURL;


  constructor(private http: HttpClient) { }


  getClaims(){
    let params = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    return this.http.get<ServiceStatus>(this.URI+'decodificar_token.php', {params:params});
  }

  validarToken(){
    let params = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    return this.http.get<ServiceStatus>(this.URI+'validar_token.php', {params:params});
  }


  validarTokenPromise(){
    let params = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    return new Promise<ServiceStatus>( (resultado) => {
      this.validarToken().subscribe(
        res => {
          resultado(res);
        }
      )
    });
  }


}
