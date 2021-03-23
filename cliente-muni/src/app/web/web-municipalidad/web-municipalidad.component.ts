import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebMunicipalidadService } from './web-municipalidad.service';

import { General } from "src/app/models/general.model";

@Component({
  selector: 'app-web-municipalidad',
  templateUrl: './web-municipalidad.component.html',
  styleUrls: ['./web-municipalidad.component.css']
})
export class WebMunicipalidadComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  general: General;

  constructor(private service: WebMunicipalidadService) { 
    this.general = new General();
  }

  ngOnInit() {
    this.listar();
  }

  listar(){ 
    this.service.getDataGeneral().subscribe(
      res => {
        this.general = res;
      },
      err => {
        console.log(err)
      }
    ); 

  }
}
