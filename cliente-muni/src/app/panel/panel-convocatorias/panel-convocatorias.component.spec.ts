import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConvocatoriasComponent } from './panel-convocatorias.component';

describe('PanelConvocatoriasComponent', () => {
  let component: PanelConvocatoriasComponent;
  let fixture: ComponentFixture<PanelConvocatoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelConvocatoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
