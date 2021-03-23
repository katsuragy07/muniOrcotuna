import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "./panel/auth.guard";

import { WebComponent } from './web/web.component';
import { PanelComponent } from './panel/panel.component';
import { WebMunicipalidadComponent } from './web/web-municipalidad/web-municipalidad.component';
import { WebMainSliderComponent } from './web/web-main-slider/web-main-slider.component';
import { WebGestionComponent } from './web/web-gestion/web-gestion.component';
import { WebNoticiasComponent } from './web/web-noticias/web-noticias.component';
import { WebServiciosComponent } from './web/web-servicios/web-servicios.component';
import { WebExpedienteComponent } from "./web/web-expediente/web-expediente.component";
import { WebConvocatoriasComponent } from './web/web-convocatorias/web-convocatorias.component';
import { WebNormasComponent } from './web/web-normas/web-normas.component';
import { WebTransparenciaComponent } from './web/web-transparencia/web-transparencia.component';
import { WebNoticiasDetalleComponent } from './web/web-noticias-detalle/web-noticias-detalle.component';


import { PanelSectionComponent } from './panel/panel-section/panel-section.component';
import { PanelIndexComponent } from './panel/panel-index/panel-index.component';
import { PanelPortadaComponent } from './panel/panel-portada/panel-portada.component';
import { PanelLoginComponent } from './panel/panel-login/panel-login.component';
import { PanelTramitesPendientesComponent } from './panel/panel-tramites-pendientes/panel-tramites-pendientes.component';
import { PanelTramitesProcesoComponent } from './panel/panel-tramites-proceso/panel-tramites-proceso.component';
import { PanelTramitesRechazadosComponent } from './panel/panel-tramites-rechazados/panel-tramites-rechazados.component';

const routes: Routes = [
  {
    path: '', 
    component: WebComponent,
    children: [
      {
        path: '',
        component: WebMainSliderComponent
      },
      {
        path: 'municipalidad',
        component: WebMunicipalidadComponent
      },
      {
        path: 'gestion',
        component: WebGestionComponent
      },
      {
        path: 'noticias',
        component: WebNoticiasComponent
      },
      {
        path: 'noticias/:id',
        component: WebNoticiasDetalleComponent
      },
      {
        path: 'servicios',
        component: WebServiciosComponent
      },
      {
        path: 'servicios/expediente',
        component: WebExpedienteComponent
      },
      {
        path: 'convocatorias',
        component: WebConvocatoriasComponent
      },
      {
        path: 'normas',
        component: WebNormasComponent
      },
      {
        path: 'normas/:id',
        component: WebNormasComponent
      },
      {
        path: 'transparencia',
        component: WebTransparenciaComponent
      }
    ]
  },
  
  {
    path: 'panel', component: PanelComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PanelIndexComponent
      },
      {
        path: 'tramites/pendientes',
        component: PanelTramitesPendientesComponent
      },
      {
        path: 'tramites/proceso',
        component: PanelTramitesProcesoComponent
      },
      {
        path: 'tramites/rechazados',
        component: PanelTramitesRechazadosComponent
      },
      {
        path: 'portada',
        component: PanelPortadaComponent
      }
    ]
  },

  {
    path: 'login', 
    canLoad: [AuthGuard],
    component: PanelLoginComponent
  }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
