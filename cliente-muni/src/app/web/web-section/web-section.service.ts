import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class WebSectionService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }


  getDataAnuncios(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('size', '10');
    params = params.append('offset', '0');
    return this.http.get<[]>(this.URI+'panel/anuncios/ajax_ver.php',{params: params});
  }

  getDataNoticias(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('size', '4');
    params = params.append('offset', '0');
    return this.http.get<[]>(this.URI+'panel/noticias/ajax_ver.php',{params: params});
  }

  getDataGeneral(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    return this.http.get<any>(this.URI+'panel/general/ajax_ver.php',{params: params});
  }
  

  getDataTelefonos(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    return this.http.get<[]>(this.URI+'panel/telefonos/ajax_ver.php',{params: params});
  }
  
}
