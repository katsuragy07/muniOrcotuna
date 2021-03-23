import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class PanelAreasService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { 
    
  }

  getData(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/areas/ajax_ver.php',{params: params});
  }

  getPages(size){
    let params = new HttpParams();
    params = params.append('size', size);
    return this.http.get<[]>(this.URI+'panel/areas/ajax_paginar.php',{params: params});
  }

  postData(portada){ 
    const form_data = new FormData(); 
    form_data.append('inputNOM', portada.nombre);
    return this.http.post(this.URI+'panel/areas/ajax_registrar.php',form_data);
  }

  putData(portada){ 
    const form_data = new FormData();
    form_data.append('id', portada.id);
    form_data.append('inputNOM', portada.nombre);
    return this.http.post(this.URI+'panel/areas/ajax_editar.php',form_data);
  }

  deleteData(portada){
    let params = new HttpParams();
    params = params.append('id', portada.id);
    return this.http.get(this.URI+'panel/areas/ajax_eliminar.php',{params: params});
  }

  getDataId(id: string){
    let params = new HttpParams();
    params = params.append('consulta', 'editar');
    params = params.append('id', id);
    return this.http.get<[0]>(this.URI+'panel/areas/ajax_ver.php',{params: params});
  }

  getDataFilter(index: string){
    let params = new HttpParams();
    params = params.append('index', index);
    return this.http.get<[]>(this.URI+'panel/areas/ajax_buscar.php',{params: params});
  }

}
