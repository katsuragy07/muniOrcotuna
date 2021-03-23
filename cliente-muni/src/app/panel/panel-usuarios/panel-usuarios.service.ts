import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';

import { GlobalConstants } from 'src/app/common/global-constans';

import * as sha1 from 'js-sha1';

@Injectable({
  providedIn: 'root'
})
export class PanelUsuariosService {

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
    return this.http.get<[]>(this.URI+'panel/usuarios/ajax_ver.php',{params: params});
  }

  getDataAreas(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'all');
    return this.http.get<[]>(this.URI+'panel/areas/ajax_ver.php',{params: params});
  }

  getPages(size){
    let params = new HttpParams();
    params = params.append('size', size);
    return this.http.get<[]>(this.URI+'panel/usuarios/ajax_paginar.php',{params: params});
  }

  postData(dato: Usuario, imagen: File){ 
    const form_data = new FormData();
    if(imagen!=null && imagen!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }

    form_data.append('privilegios', dato.privilegios);
    form_data.append('accesos', this.parsearAccesos(dato.accesos));
    form_data.append('usuario', dato.usuario);
    form_data.append('pass', sha1(dato.pass));
    form_data.append('nombre', dato.nombre);
    form_data.append('correo', dato.correo);
    form_data.append('area_idarea', dato.area_idarea);

    form_data.append('inputIMG', imagen);
    
    return this.http.post(this.URI+'panel/usuarios/ajax_registrar.php',form_data);
  }

  putData(dato, imagen: File){ 
    const form_data = new FormData();
    if(imagen!=null && imagen!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }

    form_data.append('id', dato.id);
    form_data.append('privilegios', dato.privilegios);
    form_data.append('accesos', this.parsearAccesos(dato.accesos));
    form_data.append('usuario', dato.usuario);
    if(dato.pass == dato.pass_old){
      form_data.append('pass', dato.pass);
    }else{
      form_data.append('pass', sha1(dato.pass));
    }
    form_data.append('nombre', dato.nombre);
    form_data.append('correo', dato.correo);
    form_data.append('url_img', dato.url_img);
    form_data.append('area_idarea', dato.area_idarea);

    form_data.append('inputIMG', imagen);
  
    return this.http.post(this.URI+'panel/usuarios/ajax_editar.php',form_data);
  }

  deleteData(dato){
    let params = new HttpParams();
    params = params.append('id', dato.id);
    params = params.append('url_img', dato.url_img);
    return this.http.get(this.URI+'panel/usuarios/ajax_eliminar.php',{params: params});
  }

  getDataId(id: string){
    let params = new HttpParams();
    params = params.append('consulta', 'editar');
    params = params.append('id', id);
    return this.http.get<[0]>(this.URI+'panel/usuarios/ajax_ver.php',{params: params});
  }

  getDataFilter(index: string){
    let params = new HttpParams();
    params = params.append('index', index);
    return this.http.get<[]>(this.URI+'panel/usuarios/ajax_buscar.php',{params: params});
  }
  



  parsearAccesos(accesos){
    var accesos_parse = "";
    if(accesos.general){accesos_parse += "1";}else{accesos_parse += "0";}
    if(accesos.portadas){accesos_parse += "1";}else{accesos_parse += "0";}
    if(accesos.noticias){accesos_parse += "1";}else{accesos_parse += "0";}
    if(accesos.anuncios){accesos_parse += "1";}else{accesos_parse += "0";}
    if(accesos.resoluciones){accesos_parse += "1";}else{accesos_parse += "0";}
    if(accesos.convocatorias){accesos_parse += "1";}else{accesos_parse += "0";}

    return accesos_parse;
  }


}
