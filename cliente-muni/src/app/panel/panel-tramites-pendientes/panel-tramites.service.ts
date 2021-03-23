import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './../auth.service';

import { GlobalConstants } from 'src/app/common/global-constans';


@Injectable({
  providedIn: 'root'
})
export class PanelTramitesService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient, private getUsuario: AuthService) { }


  getPages(size, tipe){
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('tipe', tipe);

    params = params.append('privilegios', this.getUsuario.usuario.res.privilegios);
    params = params.append('area', this.getUsuario.usuario.res.idarea);

    return this.http.get<[]>(this.URI+'panel/tramites/ajax_paginar.php',{params: params});
  }

  getDataPendientes(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();

    params = params.append('privilegios', this.getUsuario.usuario.res.privilegios);
    params = params.append('area', this.getUsuario.usuario.res.idarea);

    params = params.append('consulta', 'buscar');
    params = params.append('tipo', '1');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_ver.php',{params: params});
  }

  getDataFinalizados(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();

    params = params.append('privilegios', this.getUsuario.usuario.res.privilegios);
    params = params.append('area', this.getUsuario.usuario.res.idarea);

    params = params.append('consulta', 'buscar');
    params = params.append('tipo', '2');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_ver.php',{params: params});
  }
  
  getDataRechazados(index){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();

    params = params.append('privilegios', this.getUsuario.usuario.res.privilegios);
    params = params.append('area', this.getUsuario.usuario.res.idarea);
    
    params = params.append('consulta', 'buscar');
    params = params.append('tipo', '3');
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_ver.php',{params: params});
  }

  finalizar(tramite){
    let params = new HttpParams();
    params = params.append('id', tramite.id);

    params = params.append('privilegios', this.getUsuario.usuario.res.privilegios);
    params = params.append('area', this.getUsuario.usuario.res.idarea);

    return this.http.get(this.URI+'panel/tramites/ajax_finalizar.php',{params: params});
  }

  desaprobar(tramite){
    let params = new HttpParams();
    params = params.append('id', tramite.id);
    params = params.append('url_document', tramite.url_img);

    params = params.append('privilegios', this.getUsuario.usuario.res.privilegios);
    params = params.append('area', this.getUsuario.usuario.res.idarea);

    return this.http.get(this.URI+'panel/tramites/ajax_desaprobar.php',{params: params});
  }

  derivar(tramite, areaDest){
    let params = new HttpParams();
    params = params.append('id', tramite.id);
    params = params.append('areaDest', areaDest);

    params = params.append('privilegios', this.getUsuario.usuario.res.privilegios);
    params = params.append('area', this.getUsuario.usuario.res.idarea);
    
    console.log(tramite);
    console.log(areaDest)
    return this.http.get(this.URI+'panel/tramites/ajax_derivar.php',{params: params});
  }


  getDataFilter(index: string, tipo: string){
    let params = new HttpParams();
    params = params.append('index', index);
    params = params.append('tipo', tipo);

    params = params.append('privilegios', this.getUsuario.usuario.res.privilegios);
    params = params.append('area', this.getUsuario.usuario.res.idarea);
    
    return this.http.get<[]>(this.URI+'panel/tramites/ajax_buscar.php',{params: params});
  }



  getDataAreas(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'all');
    return this.http.get<[]>(this.URI+'panel/areas/ajax_ver.php',{params: params});
  }

}
