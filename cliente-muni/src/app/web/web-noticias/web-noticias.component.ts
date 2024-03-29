import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebNoticiasService } from './web-noticias.service';

import { Noticia } from 'src/app/models/noticia.model'; 

@Component({
  selector: 'app-web-noticias',
  templateUrl: './web-noticias.component.html',
  styleUrls: ['./web-noticias.component.css']
})
export class WebNoticiasComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  noticias: Noticia[];
  
  pages;

  btn: Boolean;
  ready: Boolean;
  pageActive: number;
  pageSize: number;

  constructor(private service: WebNoticiasService) { 
    this.noticias = []; 
    this.ready = false;
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
          this.noticias = res
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
          this.noticias = res
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
