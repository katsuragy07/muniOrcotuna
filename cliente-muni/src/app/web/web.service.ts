import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  getData(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    return this.http.get(this.URI+'panel/ajax_load.php',{params: params});
  }


}
