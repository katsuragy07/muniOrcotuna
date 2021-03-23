import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constans';
import { WebService } from './web.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  load: any;


  constructor(private service: WebService) { 
    this.listar();
  }

  ngOnInit() {

  }


  listar(){ 
    this.service.getData().subscribe(
        res => {
          this.load = res;
          
          if(this.load.serial==="WFkZeLn25twPXU3thnyU" && this.load.active=="1"){
           
          }else{
            document.getElementById('load').style.display = "block";
            document.getElementById('body').innerHTML = "";
          }
        },
        err => {
          console.log(err);
          document.getElementById('load').style.display = "block";
          document.getElementById('body').innerHTML = "";
        }
    );   
  }

}
