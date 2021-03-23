import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { WebExpedienteService } from "./web-expediente.service";
import { Expediente } from "src/app/models/expediente.model";
import { Tramite } from "src/app/models/tramite.model";

@Component({
  selector: 'app-web-expediente',
  templateUrl: './web-expediente.component.html',
  styleUrls: ['./web-expediente.component.css']
})
export class WebExpedienteComponent implements OnInit {

  expediente: Expediente;
  resultado: Tramite;
  modalForm: NgForm;
  loading: boolean;

  constructor(private service: WebExpedienteService) {
    this.expediente = new Expediente();
    this.resultado = new Tramite();
    this.loading = false;
   }

  ngOnInit() {
  }

  consultar(getForm){
    this.loading = true;
    this.service.findExpediente(this.expediente).subscribe(
      res => {
        getForm.resetForm();
        this.loading = false;
        this.resultado = res;
        //console.log(this.resultado)
      },
      err => {
        this.loading = false;
        console.log(err);
      }
    );
  }

}
