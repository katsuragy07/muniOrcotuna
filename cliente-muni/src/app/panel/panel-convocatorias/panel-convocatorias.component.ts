import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PanelConvocatoriasService } from './panel-convocatorias.service';
import { Convocatoria } from 'src/app/models/convocatoria.model'; 

import { NgForm } from '@angular/forms';
import { GlobalConstants } from './../../common/global-constans';

import * as $ from 'jquery';
declare var $ : any;

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-panel-convocatorias',
  templateUrl: './panel-convocatorias.component.html',
  styleUrls: ['./panel-convocatorias.component.css']
})
export class PanelConvocatoriasComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  convocatorias: Convocatoria[];
  convocatoria: Convocatoria;
  pages;
  file: File;
  fileExtension: string;
  modalForm: NgForm;

  btn: Boolean;
  ready: Boolean;
  pageActive: number;
  pageSize: number;

  constructor(private service: PanelConvocatoriasService, private toastr: ToastrService) { 
    this.ready = false;
    this.convocatoria = new Convocatoria();
    this.btn = true;
    this.pageActive = 1;
    this.pageSize = 20;
    this.paginar();
  }


  ngOnInit() {
  }


  resetForm(getForm){
    getForm.resetForm();
    this.convocatoria = new Convocatoria();
    this.fileExtension = null;
    this.file = null;
    $("#input-file-modal").val('');
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    getForm.resetForm();
    this.convocatoria = new Convocatoria();
    this.file = null;
    $("#input-file-modal").val('');
  }

  closeConfirm(){
    $("#modal-confirm").modal('hide');
  }


  
  selectedFile(event){
    event.stopPropagation();
    return false;
  }

  seleccionFile(event: HtmlInputEvent):void{
    this.file =null;
    this.fileExtension = null;
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      this.fileExtension = this.file.name.split('.').pop();
      
    }
  }

  eliminarFile(event){
    this.fileExtension = null;
    this.file = null;
    $("#input-file-modal").val('');
    event.stopPropagation();
    return false;
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
          this.convocatorias = res;
        },
        err => {
          console.log(err);
        }
      );
    }
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
          this.convocatorias = res
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
          this.convocatorias = res
        },
        err => {
          console.log(err)
        }
      );
    }
    
  }


  submit(getForm){ 
    if(this.convocatoria.id){
      if(this.fileExtension){
        this.btn = false;
        this.service.putData(this.convocatoria, this.file).subscribe(
          (res) => {
            this.btn = true;
            this.file = null;
            this.fileExtension = null;
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
        this.toastr.warning('No se selecciono ningun archivo.','Aviso');
      }
    }else{
      if(this.file){
        this.btn = false;
        this.service.postData(this.convocatoria, this.file).subscribe(
          (res) => {
            this.btn = true;
            this.file = null;
            this.fileExtension = null;
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
        this.toastr.warning('No se selecciono ningun archivo.','Aviso');
      }
    }
    
    return false;
  }


  eliminar(getElement: any){
    if(getElement.id){
      this.btn = true;
      this.convocatoria = getElement;
    }else{
      this.btn = false;
      this.service.deleteData(this.convocatoria).subscribe(
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


  edit(getElement: Convocatoria){
    this.convocatoria = Object.assign({},getElement);
    this.fileExtension = this.convocatoria.url_archivo.split('.').pop(); 
  }


}
