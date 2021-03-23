import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GlobalConstants } from 'src/app/common/global-constans';

@Injectable({
  providedIn: 'root'
})
export class PanelGeneralService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { 
    
  }

  getData(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    return this.http.get<any>(this.URI+'panel/general/ajax_ver.php',{params: params});
  }


  putData(general, imagen: File){ 
    const form_data = new FormData();
    if(imagen!=null && imagen!=undefined){
      form_data.append('editURLimg', '1');
    }else{
      form_data.append('editURLimg', '0');
    }
    form_data.append('id', general.id);
    form_data.append('alcalde', general.alcalde);
    form_data.append('correo', general.correo);
    form_data.append('telefono', general.telefono);
    form_data.append('telefono_lb1', general.telefono_lb1);
    form_data.append('telefono_lb2', general.telefono_lb2);
    form_data.append('telefono_lb3', general.telefono_lb3);
    form_data.append('telefono_lb4', general.telefono_lb4);
    form_data.append('telefono_1', general.telefono_1);
    form_data.append('telefono_2', general.telefono_2);
    form_data.append('telefono_3', general.telefono_3);
    form_data.append('telefono_4', general.telefono_4);
    form_data.append('url_img', general.url_img);
    form_data.append('inputIMG', imagen);
    
    return this.http.post(this.URI+'panel/general/ajax_editar.php',form_data);
  }



  getDataTelefonos(){
    //let params = new HttpParams();
    //params = params.append('consulta', 'buscar');
    let params = new HttpParams();
    params = params.append('consulta', 'buscar');
    return this.http.get<[]>(this.URI+'panel/telefonos/ajax_ver.php',{params: params});
  }


  
  postDataTelefonos(telefono){ 
    const form_data = new FormData();
    form_data.append('inputNOM', telefono.nombre);
    form_data.append('inputNUM', telefono.numero);
    return this.http.post(this.URI+'panel/telefonos/ajax_registrar.php',form_data);
  }

  putDataTelefonos(telefono){ 
    const form_data = new FormData();
    form_data.append('id', telefono.id);
    form_data.append('inputNOM', telefono.nombre);
    form_data.append('inputNUM', telefono.numero);
    return this.http.post(this.URI+'panel/telefonos/ajax_editar.php',form_data);
  }

  deleteDataTelefonos(telefono){
    let params = new HttpParams();
    params = params.append('id', telefono.id);
    return this.http.get(this.URI+'panel/telefonos/ajax_eliminar.php',{params: params});
  }

 

}
