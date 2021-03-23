import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-web-nav',
  templateUrl: './web-nav.component.html',
  styleUrls: ['./web-nav.component.css']
})
export class WebNavComponent implements OnInit {

  constructor() { }

  ngOnInit(){

    $(".menu-mobil-main").on("click",()=>{
      $(".menu-mobil-items").toggle(300);
    });

  }

}



