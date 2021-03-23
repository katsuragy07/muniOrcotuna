import { Component, OnInit } from '@angular/core';
import { Tramite } from "src/app/models/tramite.model";
import { WebServiciosService } from "./web-servicios.service";
import { ToastrService } from "ngx-toastr";
import { NgForm } from '@angular/forms'

import * as $ from 'jquery';
declare var $ : any;


interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-web-servicios',
  templateUrl: './web-servicios.component.html',
  styleUrls: ['./web-servicios.component.css']
})
export class WebServiciosComponent implements OnInit {

  file: File;
  fileExtension: string;
  expediente: Tramite;
  btn: boolean;
  codigo: string;
  tramiteForm: NgForm;

  constructor(private service: WebServiciosService, private toastr: ToastrService) {
    this.expediente = new Tramite();
    this.btn = true;
    this.codigo = null;
  }

  ngOnInit() {
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
    event.stopPropagation();
    return false;
  }

  submit(getForm){
    this.codigo = null;
    this.btn = false;
    this.service.postTramite(this.expediente, this.file).subscribe(
      res => {
        this.closeConfirm();
        switch(res.status){
          case 200: this.toastr.success('Tramite registrado con exito.','Aviso');
                    this.expediente = new Tramite();
                    this.file = null;
                    this.fileExtension = null;
                    this.btn = true;
                    this.codigo = res.res;
                    alert("El número de su expediente es: "+this.codigo);
                    getForm.resetForm();
                    break;

          case 301: this.toastr.warning('No se pudo subir el documento, inténtelo nuevamente.','Aviso');
                    this.btn = true;
                    break;

          case 302: this.toastr.error('No se pudo registrar el tramite. Inténtelo más tarde.','Aviso');
                    this.btn = true;
                    console.log(res);
                    break;
          
          default:  this.toastr.error('Error interno del servidor. Inténtelo más tarde.','Aviso');
                    this.btn = true;
                    console.log(res);
                    break;
        }
      },
      err => {
        this.closeConfirm();
        this.toastr.error('No se pudo registrar el tramite. Inténtelo más tarde.','Aviso');
        this.btn = true;
        console.log(err);
      }
    );
  
  }


}
