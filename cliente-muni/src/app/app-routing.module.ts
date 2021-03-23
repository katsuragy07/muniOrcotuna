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
import { WebHistoriaComponent } from './web/web-historia/web-historia.component';
import { WebCulturaComponent } from './web/web-cultura/web-cultura.component';
import { WebGastronomiaComponent } from './web/web-gastronomia/web-gastronomia.component';
import { WebTurismoComponent } from './web/web-turismo/web-turismo.component';


import { PanelSectionComponent } from './panel/panel-section/panel-section.component';
import { PanelIndexComponent } from './panel/panel-index/panel-index.component';
import { PanelPortadaComponent } from './panel/panel-portada/panel-portada.component';
import { PanelLoginComponent } from './panel/panel-login/panel-login.component';
import { PanelTramitesPendientesComponent } from './panel/panel-tramites-pendientes/panel-tramites-pendientes.component';
import { PanelTramitesFinalizadosComponent } from './panel/panel-tramites-finalizados/panel-tramites-finalizados.component';
import { PanelTramitesRechazadosComponent } from './panel/panel-tramites-rechazados/panel-tramites-rechazados.component';
import { PanelAreasComponent } from './panel/panel-areas/panel-areas.component';
import { PanelUsuariosComponent } from './panel/panel-usuarios/panel-usuarios.component';
import { PanelAnunciosComponent } from './panel/panel-anuncios/panel-anuncios.component';
import { PanelNoticiasComponent } from './panel/panel-noticias/panel-noticias.component';
import { PanelConvocatoriasComponent } from './panel/panel-convocatorias/panel-convocatorias.component';
import { WebFuncionariosComponent } from './web/web-funcionarios/web-funcionarios.component';
import { PanelResolucionesComponent } from './panel/panel-resoluciones/panel-resoluciones.component';
import { PanelGeneralComponent } from './panel/panel-general/panel-general.component';


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
        path: 'municipalidad/funcionarios',
        component: WebFuncionariosComponent
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
        path: 'resoluciones',
        component: WebNormasComponent
      },
      {
        path: 'normas/:id',
        component: WebNormasComponent
      },
      {
        path: 'transparencia',
        component: WebTransparenciaComponent
      },
      {
        path: 'historia',
        component: WebHistoriaComponent
      },
      {
        path: 'cultura',
        component: WebCulturaComponent
      },
      {
        path: 'gastronomia',
        component: WebGastronomiaComponent
      },
      {
        path: 'turismo',
        component: WebTurismoComponent
      }
    ]
  },
  
  {
    path: 'panel', component: PanelComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: PanelIndexComponent
      },
      {
        path: 'usuarios',
        component: PanelUsuariosComponent,
      },
      {
        path: 'areas',
        component: PanelAreasComponent
      },
      {
        path: 'tramites/pendientes',
        component: PanelTramitesPendientesComponent
      },
      {
        path: 'tramites/finalizados',
        component: PanelTramitesFinalizadosComponent
      },
      {
        path: 'tramites/rechazados',
        component: PanelTramitesRechazadosComponent
      },
      {
        path: 'general',
        component: PanelGeneralComponent
      },
      {
        path: 'portada',
        component: PanelPortadaComponent
      },
      {
        path: 'anuncios',
        component: PanelAnunciosComponent
      },
      {
        path: 'noticias',
        component: PanelNoticiasComponent
      },
      {
        path: 'convocatorias',
        component: PanelConvocatoriasComponent
      },
      {
        path: 'resoluciones',
        component: PanelResolucionesComponent
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
