import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class WebMainSliderService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }


  getData(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('size', '10');
    params = params.append('offset', '0');
    return this.http.get<[]>(this.URI+'panel/portadas/ajax_ver.php',{params: params});
  }
  
}
