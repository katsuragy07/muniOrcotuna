import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { AuthGuard } from "./panel/auth.guard";

import { WebHeaderComponent } from './web/web-header/web-header.component';
import { WebNavComponent } from './web/web-nav/web-nav.component';
import { WebMainSliderComponent } from './web/web-main-slider/web-main-slider.component';
import { WebSectionComponent } from './web/web-section/web-section.component';
import { WebAsideComponent } from './web/web-aside/web-aside.component';
import { WebFooterComponent } from './web/web-footer/web-footer.component';
import { PanelHeaderComponent } from './panel/panel-header/panel-header.component';
import { PanelNavComponent } from './panel/panel-nav/panel-nav.component';
import { PanelComponent } from './panel/panel.component';
import { WebComponent } from './web/web.component';
import { PanelSectionComponent } from './panel/panel-section/panel-section.component';
import { PanelFooterComponent } from './panel/panel-footer/panel-footer.component';
import { WebNormasComponent } from './web/web-normas/web-normas.component';
import { WebConvocatoriasComponent } from './web/web-convocatorias/web-convocatorias.component';
import { WebTransparenciaComponent } from './web/web-transparencia/web-transparencia.component';
import { WebNoticiasComponent } from './web/web-noticias/web-noticias.component';
import { WebNoticiasDetalleComponent } from './web/web-noticias-detalle/web-noticias-detalle.component';
import { WebPopupComponent } from './web/web-popup/web-popup.component';
import { WebMunicipalidadComponent } from './web/web-municipalidad/web-municipalidad.component';
import { WebGestionComponent } from './web/web-gestion/web-gestion.component';
import { WebServiciosComponent } from './web/web-servicios/web-servicios.component';
import { WebExpedienteComponent } from './web/web-expediente/web-expediente.component';

import { PanelIndexComponent } from './panel/panel-index/panel-index.component';
import { PanelPortadaComponent } from './panel/panel-portada/panel-portada.component';

import { PanelLoginComponent } from './panel/panel-login/panel-login.component';

import { PanelTramitesPendientesComponent } from './panel/panel-tramites-pendientes/panel-tramites-pendientes.component';
import { PanelTramitesRechazadosComponent } from './panel/panel-tramites-rechazados/panel-tramites-rechazados.component';
import { PanelTramitesProcesoComponent } from './panel/panel-tramites-proceso/panel-tramites-proceso.component';



@NgModule({
  declarations: [
    AppComponent,
    WebHeaderComponent,
    WebNavComponent,
    WebMainSliderComponent,
    WebSectionComponent,
    WebAsideComponent,
    WebFooterComponent,
    PanelHeaderComponent,
    PanelNavComponent,
    PanelComponent,
    WebComponent,
    PanelSectionComponent,
    PanelFooterComponent,
    WebNormasComponent,
    WebConvocatoriasComponent,
    WebTransparenciaComponent,
    WebNoticiasComponent,
    WebNoticiasDetalleComponent,
    WebPopupComponent,
    WebMunicipalidadComponent,
    WebGestionComponent,
    WebServiciosComponent,
    PanelIndexComponent,
    PanelPortadaComponent,
    PanelLoginComponent,
    PanelTramitesPendientesComponent,
    PanelTramitesRechazadosComponent,
    PanelTramitesProcesoComponent,
    WebExpedienteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500
    }),
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
