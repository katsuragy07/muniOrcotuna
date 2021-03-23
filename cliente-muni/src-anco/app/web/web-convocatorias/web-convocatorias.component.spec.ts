import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebConvocatoriasComponent } from './web-convocatorias.component';

describe('WebConvocatoriasComponent', () => {
  let component: WebConvocatoriasComponent;
  let fixture: ComponentFixture<WebConvocatoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebConvocatoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
