import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PanelUsuariosService } from './panel-usuarios.service';
import { Usuario } from 'src/app/models/usuario.model'; 
import { Area } from 'src/app/models/area.model'; 

import { NgForm } from '@angular/forms';
import { GlobalConstants } from './../../common/global-constans';

import * as $ from 'jquery';
declare var $ : any;

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-panel-usuarios',
  templateUrl: './panel-usuarios.component.html',
  styleUrls: ['./panel-usuarios.component.css']
})
export class PanelUsuariosComponent implements OnInit {

  URI = GlobalConstants.apiURL;
  usuarios: Usuario[];
  usuario: Usuario;
  areas: Area[];
  pages;
  file: File;
  photoSelected: string | ArrayBuffer;
  modalForm: NgForm;



  btn: Boolean;
  ready: Boolean;
  pageActive: number;
  pageSize: number;

  constructor(private service: PanelUsuariosService, private toastr: ToastrService) { 
    this.ready = false;
    this.usuario = new Usuario();
    this.btn = true;
    this.pageActive = 1;
    this.pageSize = 20;
    this.paginar();
    this.listarAreas();
  }

  ngOnInit() {
    //console.log(this.usuario)
  }


  
  resetForm(getForm){
    getForm.resetForm();
    this.usuario = new Usuario();
    this.photoSelected = null;
    this.file = null;
    $("#input-file-modal").val('');
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    getForm.resetForm();
    this.usuario = new Usuario();
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
          this.usuarios = res;
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
    var filtered =  this.usuarios.filter(function(res) {
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
          this.usuarios = res
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
          this.usuarios = res
        },
        err => {
          console.log(err)
        }
      );
    }
    
  }

  listarAreas(){
    this.service.getDataAreas().subscribe(
      res => {
        this.areas = res
      },
      err => {
        console.log(err)
      }
    );
  }

  submit(getForm){ 
    if(this.usuario.id){
        this.btn = false;
        this.service.putData(this.usuario, this.file).subscribe(
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
        this.btn = false;
        this.service.postData(this.usuario, this.file).subscribe(
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
    }
    
    return false;
  }


  eliminar(getElement: any){
    if(getElement.id){
      this.btn = true;
      this.usuario = getElement;
    }else{
      this.btn = false;
      this.service.deleteData(this.usuario).subscribe(
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


  edit(getElement: Usuario){
    this.usuario = Object.assign({},getElement);
    this.usuario.pass_old = getElement.pass;
    
    if(this.usuario.url_img){
      this.photoSelected = this.URI + "upload/usuarios/"+this.usuario.url_img;  
    }else{
      this.photoSelected = "assets/panel/gallery.png";  
      
    }
     
  }

}
