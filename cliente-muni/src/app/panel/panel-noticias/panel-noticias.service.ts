import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';


@Injectable({
  providedIn: 'root'
})
export class PanelNoticiasService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }


  getData(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/noticias/ajax_ver.php',{params: params});
  }

  getPages(size){
    let params = new HttpParams();
    params = params.append('size', size);
    return this.http.get<[]>(this.URI+'panel/noticias/ajax_paginar.php',{params: params});
  }

  postData(noticia, imagen: File){ 
    const form_data = new FormData();
    if(imagen!=null && imagen!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }
    form_data.append('inputTIT', noticia.titulo);
    form_data.append('inputDES', noticia.descripcion);
    form_data.append('inputIMG', imagen);
    
    return this.http.post(this.URI+'panel/noticias/ajax_registrar.php',form_data);
  }

  putData(noticia, imagen: File){ 
    const form_data = new FormData();
    if(imagen!=null && imagen!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }
    form_data.append('id', noticia.id);
    form_data.append('inputTIT', noticia.titulo);
    form_data.append('inputDES', noticia.descripcion);
    form_data.append('url_img', noticia.url_img);
    form_data.append('inputIMG', imagen);
    
    return this.http.post(this.URI+'panel/noticias/ajax_editar.php',form_data);
  }

  deleteData(noticia){
    let params = new HttpParams();
    params = params.append('id', noticia.id);
    params = params.append('url_img', noticia.url_img);
    return this.http.get(this.URI+'panel/noticias/ajax_eliminar.php',{params: params});
  }

  getDataFilter(index: string){
    let params = new HttpParams();
    params = params.append('index', index);
    return this.http.get<[]>(this.URI+'panel/noticias/ajax_buscar.php',{params: params});
  }
  
  
}
