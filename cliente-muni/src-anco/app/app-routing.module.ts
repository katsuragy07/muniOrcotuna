import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from './web/web.component';
import { PanelComponent } from './panel/panel.component';
import { WebMunicipalidadComponent } from './web/web-municipalidad/web-municipalidad.component';
import { WebMainSliderComponent } from './web/web-main-slider/web-main-slider.component';
import { WebGestionComponent } from './web/web-gestion/web-gestion.component';
import { WebNoticiasComponent } from './web/web-noticias/web-noticias.component';
import { WebServiciosComponent } from './web/web-servicios/web-servicios.component';
import { WebConvocatoriasComponent } from './web/web-convocatorias/web-convocatorias.component';
import { WebNormasComponent } from './web/web-normas/web-normas.component';
import { WebTransparenciaComponent } from './web/web-transparencia/web-transparencia.component';
import { WebNoticiasDetalleComponent } from './web/web-noticias-detalle/web-noticias-detalle.component';
import { PanelSectionComponent } from './panel/panel-section/panel-section.component';
import { PanelIndexComponent } from './panel/panel-index/panel-index.component';


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
    children: [
      {
        path: '',
        component: PanelIndexComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
