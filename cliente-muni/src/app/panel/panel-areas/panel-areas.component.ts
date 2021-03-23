import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PanelAreasService } from './panel-areas.service';
import { Area } from 'src/app/models/area.model'; 

import { NgForm } from '@angular/forms'

import * as $ from 'jquery';
declare var $ : any;

@Component({
  selector: 'app-panel-areas',
  templateUrl: './panel-areas.component.html',
  styleUrls: ['./panel-areas.component.css']
})
export class PanelAreasComponent implements OnInit {

  areas: Area[];
  area: Area;

  pages;
  modalForm: NgForm;

  btn: Boolean;
  ready: Boolean;
  pageActive: number;
  pageSize: number;


  constructor(private service: PanelAreasService, private toastr: ToastrService) { 
    this.ready = false;
    this.area = new Area();
    this.btn = true;
    this.pageActive = 1;
    this.pageSize = 20;
    this.paginar();
  }

  ngOnInit() {
  }


  resetForm(getForm){
    getForm.resetForm();
    this.area = new Area();
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    getForm.resetForm();
    this.area = new Area();
  }

  closeConfirm(){
    $("#modal-confirm").modal('hide');
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
          this.areas = res;
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
          this.ready = true;
          this.areas = res;
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
          this.areas = res
        },
        err => {
          console.log(err)
        }
      );
    }
    
  }


  submit(getForm){ 
    if(this.area.id){
        this.btn = false;
        this.service.putData(this.area).subscribe(
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
        this.service.postData(this.area).subscribe(
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
      this.area = getElement;
    }else{
      this.btn = false;
      this.service.deleteData(this.area).subscribe(
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


  edit(getElement: Area){
    this.area = Object.assign({},getElement);
  }


}
