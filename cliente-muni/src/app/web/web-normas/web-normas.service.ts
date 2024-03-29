import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class WebNormasService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }


  getData(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/resoluciones/ajax_ver.php',{params: params});
  }

  getPages(size){
    let params = new HttpParams();
    params = params.append('size', size);
    return this.http.get<[]>(this.URI+'panel/resoluciones/ajax_paginar.php',{params: params});
  }

  getDataFilter(index: any){
    let params = new HttpParams();
    params = params.append('tipo', index.tipo);
    params = params.append('year', index.year);
    params = params.append('mes', index.mes);
    params = params.append('index', index.index);
    return this.http.get<[]>(this.URI+'panel/resoluciones/ajax_buscar_filter.php',{params: params});
  }
  
}
