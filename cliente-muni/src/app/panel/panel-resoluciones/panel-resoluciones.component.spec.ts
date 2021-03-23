import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelResolucionesComponent } from './panel-resoluciones.component';

describe('PanelResolucionesComponent', () => {
  let component: PanelResolucionesComponent;
  let fixture: ComponentFixture<PanelResolucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelResolucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelResolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
