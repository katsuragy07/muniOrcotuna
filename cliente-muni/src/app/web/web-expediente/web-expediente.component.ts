import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { WebExpedienteService } from "./web-expediente.service";
import { Expediente } from "src/app/models/expediente.model";
import { Movimiento } from "src/app/models/movimientos.model";

@Component({
  selector: 'app-web-expediente',
  templateUrl: './web-expediente.component.html',
  styleUrls: ['./web-expediente.component.css']
})
export class WebExpedienteComponent implements OnInit {

  movimientos: Movimiento[];
  expediente: Expediente;
 
  modalForm: NgForm;
  loading: boolean;
  tocado: boolean;

  constructor(private service: WebExpedienteService) {
    this.expediente = new Expediente();
    this.movimientos = [];
    this.loading = false;
    this.tocado = false;
   }

  ngOnInit() {
  }


  consultar(getForm){
    this.tocado = true;
    this.loading = true;
    this.service.findExpediente(this.expediente).subscribe(
      res => {
        getForm.resetForm();
        this.loading = false;
        this.movimientos = res;
        console.log(this.movimientos)
      },
      err => {
        this.loading = false;
        console.log(err);
      }
    );
  }

}
