import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTramitesProcesoComponent } from './panel-tramites-proceso.component';

describe('PanelTramitesProcesoComponent', () => {
  let component: PanelTramitesProcesoComponent;
  let fixture: ComponentFixture<PanelTramitesProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTramitesProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTramitesProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
