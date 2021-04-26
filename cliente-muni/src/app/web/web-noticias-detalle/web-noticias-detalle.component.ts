import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebNoticiasDetalleService } from './web-noticias-detalle.service';

import { Noticia } from 'src/app/models/noticia.model'; 

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-web-noticias-detalle',
  templateUrl: './web-noticias-detalle.component.html',
  styleUrls: ['./web-noticias-detalle.component.css']
})
export class WebNoticiasDetalleComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  noticia: Noticia[];
  

  btn: Boolean;
  ready: Boolean;
 


  constructor(private service: WebNoticiasDetalleService, private route: ActivatedRoute) { 
    this.noticia = []; 
    this.ready = false;
    this.btn = true;
    this.listar();
  }

  ngOnInit(){

  }

  listar(){ 
    this.ready = false;
    this.service.getDataId(this.route.snapshot.params['id']).subscribe(
        res => {
          this.ready = true;
          this.noticia = res;
        },
        err => {
          this.ready = true;
          console.log(err)
        }
    );   
  }
  
}
