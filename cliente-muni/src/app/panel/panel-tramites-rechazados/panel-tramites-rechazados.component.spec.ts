import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTramitesRechazadosComponent } from './panel-tramites-rechazados.component';

describe('PanelTramitesRechazadosComponent', () => {
  let component: PanelTramitesRechazadosComponent;
  let fixture: ComponentFixture<PanelTramitesRechazadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTramitesRechazadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTramitesRechazadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
