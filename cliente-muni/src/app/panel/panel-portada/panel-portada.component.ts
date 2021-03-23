import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PanelPortadaService } from './panel-portada.service';
import { Portada } from 'src/app/models/portada.model'; 

import { NgForm } from '@angular/forms';
import { GlobalConstants } from './../../common/global-constans';

import * as $ from 'jquery';
declare var $ : any;


interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-panel-portada',
  templateUrl: './panel-portada.component.html',
  styleUrls: ['./panel-portada.component.css']
})


export class PanelPortadaComponent implements OnInit {
  
  URI = GlobalConstants.apiURL;
  portadas: Portada[];
  portada: Portada;
  pages;
  file: File;
  photoSelected: string | ArrayBuffer;
  modalForm: NgForm;

  btn: Boolean;
  ready: Boolean;
  pageActive: number;
  pageSize: number;

  constructor(private service: PanelPortadaService, private toastr: ToastrService) { 
    this.ready = false;
    this.portada = new Portada();
    this.btn = true;
    this.pageActive = 1;
    this.pageSize = 20;
    this.paginar();
  }


  ngOnInit() {
  }


  resetForm(getForm){
    getForm.resetForm();
    this.portada = new Portada();
    this.photoSelected = null;
    this.file = null;
    $("#input-file-modal").val('');
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    getForm.resetForm();
    this.portada = new Portada();
    this.photoSelected = null;
    this.file = null;
    $("#input-file-modal").val('');
  }

  closeConfirm(){
    $("#modal-confirm").modal('hide');
  }

  seleccionFoto(event: HtmlInputEvent):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      
      //Preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }



  filtrar(index: string){
    this.pageActive = 1;
    if(index==""){
      this.paginar();
    }else{
      this.ready = false;
      this.service.getDataFilter(index).subscribe(
        res =>{
          this.ready = true;
          this.portadas = res;
        },
        err => {
          console.log(err);
        }
      );
    }
    
    /*
    var heroes = [
      {name: "Batman", franchise: "DC"},
      {name: "Ironman", franchise: "Marvel"},
      {name: "Thor", franchise: "Marvel"},
      {name: "Superman", franchise: "DC"}
    ];
    var filtered =  this.portadas.filter(function(res) {
      return res.nombre == index;
    });
    */
  }


  paginar(){
    this.ready = false;
    this.service.getPages(this.pageSize).subscribe(
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
      this.service.getData(this.pages[page-1]).subscribe(
        res => {
          //console.log(res)
          this.ready = true;
          this.portadas = res
        },
        err => {
          console.log(err)
        }
      );
    }catch(error){
      console.log(error);
      this.pageActive -= 1;
      this.service.getData(this.pages[page-2]).subscribe(
        res => {
          this.ready = true;
          this.portadas = res
        },
        err => {
          console.log(err)
        }
      );
    }
    
  }


  submit(getForm){ 
    if(this.portada.id){
      if(this.photoSelected){
        this.btn = false;
        this.service.putData(this.portada, this.file).subscribe(
          (res) => {
            this.btn = true;
            this.toastr.success('Elemento actualizado con exito.','Aviso');
            this.paginar();
            this.closeForm(getForm);
          },
          (err) => {
            console.log(err);
            this.btn = true;
            this.toastr.error('No se pudo actualizar el elemento.','Aviso');
          }
        );
      }else{
        this.toastr.warning('No se selecciono ninguna imagen.','Aviso');
      }
    }else{
      if(this.photoSelected){
        this.btn = false;
        this.service.postData(this.portada, this.file).subscribe(
          (res) => {
            this.btn = true;
            this.toastr.success('Elemento registrado con exito.','Aviso');
            this.pageActive = 1;
            this.paginar();
            this.closeForm(getForm);
          },
          (err) => {
            console.log(err)
            this.btn = true;
            this.toastr.error('No se pudo registrar el elemento.','Aviso');
          }
        );
      }else{
        this.toastr.warning('No se selecciono ninguna imagen.','Aviso');
      }
    }
    
    return false;
  }


  eliminar(getElement: any){
    if(getElement.id){
      this.btn = true;
      this.portada = getElement;
    }else{
      this.btn = false;
      this.service.deleteData(this.portada).subscribe(
        res => {
          this.btn = true;
          this.toastr.success('Elemento eliminado con exito.','Aviso');
          this.paginar();
          this.closeConfirm();
        },
        err => {
          console.log(err);
          this.btn = true;
          this.toastr.error('No se pudo eliminar el elemento.','Aviso');
        }
      );
    }
  }


  edit(getElement: Portada){
    this.portada = Object.assign({},getElement);
    this.photoSelected = this.URI+"upload/portadas/"+this.portada.url_img;   
  }

}
