import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class PanelConvocatoriasService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  getData(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/convocatorias/ajax_ver.php',{params: params});
  }

  getPages(size){
    let params = new HttpParams();
    params = params.append('size', size);
    return this.http.get<[]>(this.URI+'panel/convocatorias/ajax_paginar.php',{params: params});
  }

  postData(convocatoria, file: File){ 
    const form_data = new FormData();
    if(file!=null && file!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }
    form_data.append('inputNOM', convocatoria.nombre);
    form_data.append('file', file);
    return this.http.post(this.URI+'panel/convocatorias/ajax_registrar.php',form_data);
  }

  putData(convocatoria, file: File){ 
    const form_data = new FormData();
    if(file!=null && file!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }
    form_data.append('id', convocatoria.id);
    form_data.append('inputNOM', convocatoria.nombre);
    form_data.append('url_archivo', convocatoria.url_archivo);
    form_data.append('file', file);
    
    return this.http.post(this.URI+'panel/convocatorias/ajax_editar.php',form_data);
  }

  deleteData(convocatoria){
    let params = new HttpParams();
    params = params.append('id', convocatoria.id);
    params = params.append('url_archivo', convocatoria.url_archivo);
    return this.http.get(this.URI+'panel/convocatorias/ajax_eliminar.php',{params: params});
  }

  getDataFilter(index: string){
    let params = new HttpParams();
    params = params.append('index', index);
    return this.http.get<[]>(this.URI+'panel/convocatorias/ajax_buscar.php',{params: params});
  }
  
}
