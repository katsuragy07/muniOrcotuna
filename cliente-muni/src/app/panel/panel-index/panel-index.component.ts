import { Component, OnInit } from '@angular/core';


import { PanelIndexService } from './panel-index.service';

@Component({
  selector: 'app-panel-index',
  templateUrl: './panel-index.component.html',
  styleUrls: ['./panel-index.component.css']
})
export class PanelIndexComponent implements OnInit {

  constructor( private service: PanelIndexService) { }


  async ngOnInit(){

    /*
    await this.service.validarTokenPromise().then(res => {
      console.log(res)
      if(res.status==200){
        console.log("identificado");
      }else{
        console.log("desconocido");
      }
    });
    */
   
    //console.log("asyncrono")

    

  }
  
  


}
