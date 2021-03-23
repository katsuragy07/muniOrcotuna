import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';


@Injectable({
  providedIn: 'root'
})
export class PanelTramitesService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }


  getPages(size, tipe){
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('tipe', tipe);
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_paginar.php',{params: params});
  }

  getDataPendientes(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('tipo', '0');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_ver.php',{params: params});
  }

  getDataProceso(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('tipo', '1');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_ver.php',{params: params});
  }
  
  getDataRechazados(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('tipo', '2');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_ver.php',{params: params});
  }

  aprobar(tramite){
    let params = new HttpParams();
    params = params.append('id', tramite.id);
    return this.http.get(this.URI+'panel/tramites/ajax_aprobar.php',{params: params});
  }

  desaprobar(tramite){
    let params = new HttpParams();
    params = params.append('id', tramite.id);
    params = params.append('url_document', tramite.url_img);
    return this.http.get(this.URI+'panel/tramites/ajax_desaprobar.php',{params: params});
  }



  getDataFilter(index: string, tipo: string){
    let params = new HttpParams();
    params = params.append('index', index);
    params = params.append('tipo', tipo);
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_buscar.php',{params: params});
  }


}
