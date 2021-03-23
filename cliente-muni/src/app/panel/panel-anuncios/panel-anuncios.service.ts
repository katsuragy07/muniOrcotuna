import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';


@Injectable({
  providedIn: 'root'
})
export class PanelAnunciosService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }


  getData(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/anuncios/ajax_ver.php',{params: params});
  }

  getPages(size){
    let params = new HttpParams();
    params = params.append('size', size);
    return this.http.get<[]>(this.URI+'panel/anuncios/ajax_paginar.php',{params: params});
  }

  postData(anuncio, imagen: File){ 
    const form_data = new FormData();
    if(imagen!=null && imagen!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }
    form_data.append('inputNOM', anuncio.nombre);

    if(anuncio.referencia.length>4){
      form_data.append('inputREF', anuncio.referencia);
    }else{
      form_data.append('inputREF', '');
    }
    
    form_data.append('inputINI', anuncio.inicio == true ? '1' : '0');
    form_data.append('inputIMG', imagen);
    
    return this.http.post(this.URI+'panel/anuncios/ajax_registrar.php',form_data);
  }

  putData(anuncio, imagen: File){ 
    const form_data = new FormData();
    if(imagen!=null && imagen!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }
    form_data.append('id', anuncio.id);
    form_data.append('inputNOM', anuncio.nombre);
    
    if(anuncio.referencia.length>4){
      form_data.append('inputREF', anuncio.referencia);
    }else{
      form_data.append('inputREF', '');
    }
    
    form_data.append('inputINI', anuncio.inicio == true ? '1' : '0');
    form_data.append('url_img', anuncio.url_img);
    form_data.append('inputIMG', imagen);
    
    return this.http.post(this.URI+'panel/anuncios/ajax_editar.php',form_data);
  }

  deleteData(anuncio){
    let params = new HttpParams();
    params = params.append('id', anuncio.id);
    params = params.append('url_img', anuncio.url_img);
    return this.http.get(this.URI+'panel/anuncios/ajax_eliminar.php',{params: params});
  }

  getDataFilter(index: string){
    let params = new HttpParams();
    params = params.append('index', index);
    return this.http.get<[]>(this.URI+'panel/anuncios/ajax_buscar.php',{params: params});
  }

  
}
