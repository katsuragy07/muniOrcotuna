import { Component, OnInit } from '@angular/core';

import { AuthService } from "src/app/panel/auth.service";


@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css'],
  
})



export class PanelHeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    
  }

  
  logout(){
    this.auth.logout();
  }

}
