import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class WebNoticiasDetalleService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  getDataId(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'editar');
    params = params.append('id', index);
    return this.http.get<any>(this.URI+'panel/noticias/ajax_ver.php',{params: params});
  }
}
