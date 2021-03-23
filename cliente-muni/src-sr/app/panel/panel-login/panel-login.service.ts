import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constans';
import { ServiceStatus} from 'src/app/models/service_status.model';

@Injectable({
  providedIn: 'root'
})
export class PanelLoginService {

  URI = GlobalConstants.apiURL;


  constructor(private http: HttpClient) { }


  login(getData){
    const form_data = new FormData();
    form_data.append('user_name',getData.user);
    form_data.append('user_password',getData.password);
    return this.http.post<ServiceStatus>(this.URI+'val_login.php', form_data);
  }

}
