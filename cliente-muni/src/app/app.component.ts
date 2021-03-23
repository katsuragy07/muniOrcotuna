import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

declare var gtag;
declare var ga;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente-muni';
  titulo_main = 'Municipalidad Distrital de Orcotuna';


  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(public router: Router, private titulo: Title){

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd){

        var url_act = this.capitalizeFirstLetter(this.router.url.substring(1,this.router.url.length));
        for(var i=0; i<url_act.length; i++){
          if(url_act.substr(i,1)=="/"){
            url_act = url_act.substr(0,i);
            break;
          }
        }
        switch(url_act){
          case "":  url_act = ""; 
                    this.titulo.setTitle(this.titulo_main); 
                    break;

          case "municipalidad": url_act = ""; 
                                this.titulo.setTitle(this.titulo_main); 
                                break;

          default:  this.titulo.setTitle( url_act + " - " + this.titulo_main); 
                    break;
        }
     

        gtag('config', 'G-1T8MTZPYLN'); 
        gtag('event', 'page_view', {
          page_location: event.urlAfterRedirects,
          page_path: event.urlAfterRedirects,
          page_title: this.titulo_main
        });  
        gtag('event', 'screen_view', {
          'screen_name' : event.urlAfterRedirects
        });

      }
      
    });
    
  }
  

}


