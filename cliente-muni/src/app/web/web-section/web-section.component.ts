import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebSectionService } from './web-section.service';

import { Anuncio } from 'src/app/models/anuncio.model'; 
import { Noticia } from "src/app/models/noticia.model";
import { General } from "src/app/models/general.model";
import { Telefono } from "src/app/models/telefono.model";

import * as $ from "jquery";

@Component({
  selector: 'app-web-section',
  templateUrl: './web-section.component.html',
  styleUrls: ['./web-section.component.css']
})
export class WebSectionComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  anuncios: Anuncio[];
  noticias: Noticia[];
  general: General;
  telefonos: Telefono[];

  constructor(private service: WebSectionService) { 
    this.anuncios = []; 
    this.noticias = [];
    this.telefonos = [];
    this.general = new General();
  }

  ngOnInit() { 
    this.listar();
    this.listarTelefonos();
  }


  
  listar(){ 
    this.service.getDataAnuncios().subscribe(
        res => {
          this.anuncios = res;
          setTimeout(()=>{this.initSwiper();},100);
        },
        err => {
          console.log(err)
        }
    ); 

    this.service.getDataNoticias().subscribe(
      res => {
        this.noticias = res;
      },
      err => {
        console.log(err)
      }
    ); 
    
    this.service.getDataGeneral().subscribe(
      res => {
        this.general = res;
      },
      err => {
        console.log(err)
      }
    ); 

  }


  listarTelefonos(){
    try{
      this.service.getDataTelefonos().subscribe(
        res => {
          //console.log(res)
          this.telefonos = res
        },
        err => {
          console.log(err)
        }
      );
    }catch(error){
      console.log(error);
      this.service.getDataTelefonos().subscribe(
        res => {
          this.telefonos = res
        },
        err => {
          console.log(err)
        }
      );
    }
    
  }

  initSwiper(){
    const swiper3 = new Swiper('.swiper-container-section-2', {
      loop: true,
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 10,
      autoHeight: true,
      centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        1050: {
          slidesPerView: 3,
        },
        // when window width is >= 480px
        990: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        800: {
          slidesPerView: 2,
        },
        460: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
          initialSlide: 0,
        }
      }
    });
  }

  
  openPopUp($event: any){
    $("#load_swiper").html(`
        <div style="background-image: url('${$event.target.src}');background-size:contain;background-repeat: no-repeat;background-position: center center;height:100%; width:100%;"></div>   
    `);
    $(".popup-container2").css("display","block");
  }

}
