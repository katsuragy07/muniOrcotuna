import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebNormasService } from './web-normas.service';

import { Resolucion } from 'src/app/models/resoluciones.model'; 

@Component({
  selector: 'app-web-normas',
  templateUrl: './web-normas.component.html',
  styleUrls: ['./web-normas.component.css']
})
export class WebNormasComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  resoluciones: Resolucion[];
  
  pages;

  btn: Boolean;
  ready: Boolean;
  pageActive: number;
  pageSize: number;

  constructor(private service: WebNormasService) {
    this.resoluciones = []; 
    this.ready = false;
    this.btn = true;
    this.pageActive = 1;
    this.pageSize = 20;
  }

  ngOnInit(){
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
          this.resoluciones = res
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
          this.resoluciones = res
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


  filtrar(index_tipo: string,index_year: string,index_mes: string,index_ref: string){

    var index = {tipo:index_tipo,year:index_year,mes:index_mes,index:index_ref};
    this.pageActive = 1;

    if(false){
      this.paginar();
    }else{
      this.ready = false;

      this.service.getDataFilter(index).subscribe(
        res =>{
          this.ready = true;
          this.resoluciones = res;
        },
        err => {
          console.log(err);
        }
      );

    }

  }

}
