import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalConstants } from "src/app/common/global-constans";

@Injectable({
  providedIn: 'root'
})
export class WebServiciosService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { 

  }

  postTramite(data, file: File){
    const form_data = new FormData();
    if(file!=null && file!=undefined){
      form_data.append('edit_file', '1');
    }else{
      form_data.append('edit_file', '0');
    }
    form_data.append("file", file);
    form_data.append("doc_tipo", data.doc_tipo);
    form_data.append("doc_nro", data.doc_nro);
    form_data.append("solicitante", data.solicitante);
    form_data.append("telefono", data.telefono);
    form_data.append("email", data.email);
    form_data.append("asunto", data.asunto);
    form_data.append("destinatario", data.destinatario);

    return this.http.post<any>(this.URI+"panel/tramites/ajax_registrar.php", form_data);
  }
}
