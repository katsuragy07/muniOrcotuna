import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';

@Component({
  selector: 'app-web-main-slider',
  templateUrl: './web-main-slider.component.html',
  styleUrls: ['./web-main-slider.component.css']
})
export class WebMainSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   

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
    });
  }

}
