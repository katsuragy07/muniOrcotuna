import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebMainSliderService } from './web-main-slider.service';

import { Portada } from 'src/app/models/portada.model'; 

@Component({
  selector: 'app-web-main-slider',
  templateUrl: './web-main-slider.component.html',
  styleUrls: ['./web-main-slider.component.css']
})
export class WebMainSliderComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  portadas: Portada[];

  constructor(private service: WebMainSliderService) { 
    this.portadas = []; 
  }

  ngOnInit() {
    this.listar();
  }

  listar(){ 
    this.service.getData().subscribe(
        res => {
          this.portadas = res;
          setTimeout(()=>{this.initSwiper();},100);
        },
        err => {
          console.log(err)
        }
    );   
  }


  initSwiper(){
    const swiper = new Swiper('.swiper-container-main', {
      loop: true,
      effect: 'fade',
      autoHeight: true,
      pagination: {
          el: '.swiper-pagination',
      },
      autoplay: {
          delay: 4500,
          disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }


}
