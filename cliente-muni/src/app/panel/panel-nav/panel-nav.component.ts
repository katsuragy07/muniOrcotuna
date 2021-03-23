import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { GlobalConstants } from 'src/app/common/global-constans';

@Component({
  selector: 'app-panel-nav',
  templateUrl: './panel-nav.component.html',
  styleUrls: ['./panel-nav.component.css']
})
export class PanelNavComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  
  constructor(public getUsuario: AuthService) {
    //console.log(this.getUsuario.usuario.res)
   }

  ngOnInit() {
    
  }

  openTramiteMenu(){
    document.getElementById("treeTramite").style.display = "block";
  }

}
