import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTramitesPendientesComponent } from './panel-tramites-pendientes.component';

describe('PanelTramitesPendientesComponent', () => {
  let component: PanelTramitesPendientesComponent;
  let fixture: ComponentFixture<PanelTramitesPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTramitesPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTramitesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
