import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class WebFooterService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  getDataGeneral(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    return this.http.get<any>(this.URI+'panel/general/ajax_ver.php',{params: params});
  }
  
}
