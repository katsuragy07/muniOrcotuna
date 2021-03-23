import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import * as $ from 'jquery';

@Component({
  selector: 'app-web-popup',
  templateUrl: './web-popup.component.html',
  styleUrls: ['./web-popup.component.css']
})
export class WebPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#popup-close").click(()=>{
      $(".popup-container").css("display","none");
    });


    $(".popup-container").on("click",(e)=>{
      const container = $(".swiper-popup");
      if (!container.is(e.target) && container.has(e.target).length === 0) { 
        $(".popup-container").css("display","none");      
     }
    });


    const swiper1 = new Swiper('.swiper-popup', {
      loop: true,
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
