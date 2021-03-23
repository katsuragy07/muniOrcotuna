import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebFooterService } from './web-footer.service';

import { General } from "src/app/models/general.model";

@Component({
  selector: 'app-web-footer',
  templateUrl: './web-footer.component.html',
  styleUrls: ['./web-footer.component.css']
})
export class WebFooterComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  general: General;

  constructor(private service: WebFooterService) { 
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
