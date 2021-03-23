import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';

@Component({
  selector: 'app-web-section',
  templateUrl: './web-section.component.html',
  styleUrls: ['./web-section.component.css']
})
export class WebSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() { 

    const swiper1 = new Swiper('.swiper-container-nav-section', {
      slidesPerView: 6,
      spaceBetween: 20,
      autoplay: {
        delay: 1700,
      },
      pagination: {
          el: '.swiper-pagination-section',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        1050: {
          slidesPerView: 6,
        },
        // when window width is >= 480px
        950: {
          slidesPerView: 5,
        },
        // when window width is >= 640px
        800: {
          slidesPerView: 4,
        },
        460: {
          slidesPerView: 3,
        },
        100: {
          slidesPerView: 2,
        }
      }
    });

    const swiper2 = new Swiper('.swiper-container-section-1',{
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
    });

    const swiper3 = new Swiper('.swiper-container-section-2', {
      loop: true,
      spaceBetween: 10,
      autoHeight: true,
      centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    });


  }

}
