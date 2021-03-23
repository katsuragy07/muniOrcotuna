import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PanelGeneralService } from './panel-general.service';
import { General } from 'src/app/models/general.model'; 
import { Telefono } from 'src/app/models/telefono.model'; 

import { NgForm } from '@angular/forms';
import { GlobalConstants } from './../../common/global-constans';

import * as $ from 'jquery';
declare var $ : any;


interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-panel-general',
  templateUrl: './panel-general.component.html',
  styleUrls: ['./panel-general.component.css']
})
export class PanelGeneralComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  general: General;
  telefonos: Telefono[];
  telefono_select: Telefono;

  file: File;
  photoSelected: string | ArrayBuffer;
  modalForm: NgForm;

  btn: Boolean;
  ready: Boolean;

  constructor(private service: PanelGeneralService, private toastr: ToastrService) { 
    this.ready = false;
    this.general = new General();
    this.telefono_select = new Telefono();
    this.btn = true;
    this.listarTelefonos();
    this.listar();
    
  }

  ngOnInit() {

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


  listar(){
    this.ready = false;
    this.btn = false;
    try{
      this.service.getData().subscribe(
        res => {
          //console.log(res)
          this.ready = true;
          this.btn = true;
          this.general = res;
          this.photoSelected = this.URI+"upload/general/"+this.general.url_img;   
        },
        err => {
          console.log(err);
          this.btn = true;
        }
      );
    }catch(error){
      console.log(error);
      this.service.getData().subscribe(
        res => {
          this.ready = true;
          this.btn = true;
          this.general = res;
          this.photoSelected = this.URI+"upload/general/"+this.general.url_img;   
        },
        err => {
          console.log(err);
          this.btn = true;
        }
      );
    }
    
  }


  submit(getForm){ 
    if(this.general.id){
      if(true){
        this.btn = false;
        this.service.putData(this.general, this.file).subscribe(
          (res) => {
            this.btn = true;
            this.toastr.success('Elemento actualizado con exito.','Aviso');
            this.listar();
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
    }
    return false;
  }






  
  resetForm(getForm){
    getForm.resetForm();
    this.telefono_select = new Telefono();
    $("#input-file-modal").val('');
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    getForm.resetForm();
    this.telefono_select = new Telefono();
    $("#input-file-modal").val('');
  }

  closeConfirm(){
    $("#modal-confirm").modal('hide');
  }
  
  
  listarTelefonos(){
    this.ready = false;
    try{
      this.service.getDataTelefonos().subscribe(
        res => {
          //console.log(res)
          this.ready = true;
          this.telefonos = res
        },
        err => {
          console.log(err)
        }
      );
    }catch(error){
      console.log(error);
      this.service.getDataTelefonos().subscribe(
        res => {
          this.ready = true;
          this.telefonos = res
        },
        err => {
          console.log(err)
        }
      );
    }
    
  }


  submitTelefonos(getForm){ 
    if(this.telefono_select.id){
        this.btn = false;
        this.service.putDataTelefonos(this.telefono_select).subscribe(
          (res) => {
            this.btn = true;
            this.toastr.success('Elemento actualizado con exito.','Aviso');
            this.listarTelefonos();
            this.closeForm(getForm);
          },
          (err) => {
            console.log(err);
            this.btn = true;
            this.toastr.error('No se pudo actualizar el elemento.','Aviso');
          }
        );   
    }else{
        this.btn = false;
        this.service.postDataTelefonos(this.telefono_select).subscribe(
          (res) => {
            this.btn = true;
            this.toastr.success('Elemento registrado con exito.','Aviso');
            this.listarTelefonos();
            this.closeForm(getForm);
          },
          (err) => {
            console.log(err)
            this.btn = true;
            this.toastr.error('No se pudo registrar el elemento.','Aviso');
          }
        );
     
    }
    
    return false;
  }


  eliminarTelefonos(getElement: any){
    if(getElement.id){
      this.btn = true;
      this.telefono_select = getElement;
    }else{
      this.btn = false;
      this.service.deleteDataTelefonos(this.telefono_select).subscribe(
        res => {
          this.btn = true;
          this.toastr.success('Elemento eliminado con exito.','Aviso');
          this.listarTelefonos();
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


  editTelefonos(getElement: Telefono){
    this.telefono_select = Object.assign({},getElement);
  }
}
