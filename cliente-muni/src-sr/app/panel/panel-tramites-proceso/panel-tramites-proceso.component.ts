import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { PanelTramitesService } from './../panel-tramites-pendientes/panel-tramites.service';
import { Tramite } from 'src/app/models/tramite.model'; 

import { NgForm } from '@angular/forms';
import { GlobalConstants } from "src/app/common/global-constans";

import * as $ from 'jquery';
declare var $ : any;


@Component({
  selector: 'app-panel-tramites-proceso',
  templateUrl: './panel-tramites-proceso.component.html',
  styleUrls: ['./panel-tramites-proceso.component.css']
})
export class PanelTramitesProcesoComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  
  tramites: Tramite[];
  tramite: Tramite;
  pages;
  file: File;
  photoSelected: string | ArrayBuffer;
  modalForm: NgForm;

  btn: Boolean;
  ready: Boolean;
  pageActive: number;
  pageSize: number;
  action: number;
  
  constructor(private service: PanelTramitesService, private toastr: ToastrService) { 
    this.ready = false;
    this.tramite = new Tramite();
    this.btn = true;
    this.pageActive = 1;
    this.pageSize = 5;
    this.paginar();
  }

  ngOnInit() {
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    getForm.resetForm();
    this.tramite = new Tramite();
    this.photoSelected = null;
    this.file = null;
  }
  closeConfirm(){
    $("#modal-confirm").modal('hide');
  }


  paginar(){
    this.ready = false;
    this.service.getPages(this.pageSize, "proceso").subscribe(
      res => {
        //console.log(res)
        this.pages = res;
        this.listar(this.pageActive);
      },
      err => {console.log(err)}
    );
  }

  listar(page: number){
    this.ready = false;
    this.pageActive = page;
    try{
      this.service.getDataProceso(this.pages[page-1]).subscribe(
        res => {
          this.ready = true;
          this.tramites = res
        },
        err => {
          console.log(err)
        }
      );
    }catch(error){
      console.log(error);
      this.pageActive -= 1;
      this.service.getDataProceso(this.pages[page-2]).subscribe(
        res => {
          this.ready = true;
          this.tramites = res
        },
        err => {
          console.log(err)
        }
      );
    }
    
  }

  detalles(getElement: Tramite){
    this.btn = false;
    this.tramite = Object.assign({},getElement);
    this.photoSelected = "http://localhost/www/muniSanRa/server/upload/portadas/"+this.tramite.url_document;   
  }

  aprobar(getElement: Tramite){
    if(getElement.id){
      this.action = 1;
      this.btn = true;
      this.tramite = getElement;
    }else{
      this.btn = false;
      this.service.aprobar(this.tramite).subscribe(
        res => {
          this.btn = true;
          this.toastr.success('Tramite aprobado con exito.','Aviso');
          this.paginar();
          this.closeConfirm();
        },
        err => {
          console.log(err);
          this.btn = true;
          this.toastr.error('No se pudo completar la acción.','Aviso');
        }
      );
    }
  }

  desaprobar(getElement: Tramite){
    if(getElement.id){
      this.action = 2;
      this.btn = true;
      this.tramite = getElement;
    }else{
      this.btn = false;
      this.service.desaprobar(this.tramite).subscribe(
        res => {
          this.btn = true;
          this.toastr.success('Tramite desaprobado con exito.','Aviso');
          this.paginar();
          this.closeConfirm();
        },
        err => {
          console.log(err);
          this.btn = true;
          this.toastr.error('No se pudo completar la acción.','Aviso');
        }
      );
    }
  }


  filtrar(index: string){
    this.pageActive = 1;
    if(index==""){
      this.paginar();
    }else{
      this.ready = false;
      this.service.getDataFilter(index, "1").subscribe(
        res =>{
          this.ready = true;
          this.tramites = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
