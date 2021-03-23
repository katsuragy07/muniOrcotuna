import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { GlobalConstants } from "src/app/common/global-constans";

@Injectable({
  providedIn: 'root'
})
export class WebExpedienteService {

  URI = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  findExpediente(expediente){
    let params = new HttpParams();
    params = params.append("codigo", expediente.codigo);
    return this.http.get<any>(this.URI+"panel/tramites/ajax_expediente.php",{params: params});

  }
}
