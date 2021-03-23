import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebPopupService } from './web-popup.service';

import { Anuncio } from 'src/app/models/anuncio.model'; 
import * as $ from 'jquery';

@Component({
  selector: 'app-web-popup',
  templateUrl: './web-popup.component.html',
  styleUrls: ['./web-popup.component.css']
})
export class WebPopupComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  anuncios: Anuncio[];

  constructor(private service: WebPopupService) { 
    this.anuncios = []; 
  }

  ngOnInit() {

    $("#popup-close").click(()=>{
      $(".popup-container").css("display","none");
    });
    $("#popup-close2").click(()=>{
      $(".popup-container2").css("display","none");
    });

    $(".popup-container").on("click",(e)=>{
      const container = $(".swiper-popup");
      if (!container.is(e.target) && container.has(e.target).length === 0) { 
        $(".popup-container").css("display","none");       
     }else{

     }
    });
    $(".popup-container2").on("click",(e)=>{
      const container = $(".swiper-popup");
      if (!container.is(e.target) && container.has(e.target).length === 0) { 
        $(".popup-container2").css("display","none");   
     }else{

     }
    });

    this.listar();

  }


  listar(){ 
    this.service.getData().subscribe(
        res => {
          //console.log(res)
          this.anuncios = res;
          setTimeout(()=>{this.initSwiper();},100);
          if(this.anuncios.length<1){
            $(".popup-container").css("display","none");
          }else{
            $(".popup-container").css("display","block");
          }
        },
        err => {
          console.log(err)
        }
    );   
  }


  initSwiper(){
    const swiper1 = new Swiper('.swiper-popup', {
      /*loop: true,*/
      spaceBetween: 10,
      autoHeight: true,
      centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      }
    });
  }

}
