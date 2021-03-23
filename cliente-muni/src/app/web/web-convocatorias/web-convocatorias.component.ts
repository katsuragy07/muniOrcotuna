import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebConvocatoriasService } from './web-convocatorias.service';

import { Convocatoria } from 'src/app/models/convocatoria.model'; 


@Component({
  selector: 'app-web-convocatorias',
  templateUrl: './web-convocatorias.component.html',
  styleUrls: ['./web-convocatorias.component.css']
})
export class WebConvocatoriasComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  convocatorias: Convocatoria[];
  ready: Boolean;
  btn: Boolean;

  pages;

  pageActive: number;
  pageSize: number;

  constructor(private service: WebConvocatoriasService) { 
    this.ready = false;
    this.convocatorias = []; 
    this.btn = true;
    this.pageActive = 1;
    this.pageSize = 20;
  }

  ngOnInit() {
    this.paginar();
  }

  listar(page: number){
    this.ready = false;
    this.pageActive = page;
    try{
      this.service.getData(this.pages[page-1]).subscribe(
        res => {
          //console.log(res)
          this.ready = true;
          this.convocatorias = res
        },
        err => {
          console.log(err)
        }
      );
    }catch(error){
      console.log(error);
      this.pageActive -= 1;
      this.service.getData(this.pages[page-2]).subscribe(
        res => {
          this.ready = true;
          this.convocatorias = res
        },
        err => {
          console.log(err)
        }
      );
    }
    
  }

  paginar(){
    this.ready = false;
    this.service.getPages(this.pageSize).subscribe(
      res => {
        //console.log(res)
        this.pages = res;
        this.listar(this.pageActive);
      },
      err => {console.log(err)}
    );
  }

}
