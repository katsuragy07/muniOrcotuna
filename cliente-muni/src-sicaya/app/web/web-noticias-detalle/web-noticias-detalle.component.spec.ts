import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNoticiasDetalleComponent } from './web-noticias-detalle.component';

describe('WebNoticiasDetalleComponent', () => {
  let component: WebNoticiasDetalleComponent;
  let fixture: ComponentFixture<WebNoticiasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebNoticiasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNoticiasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
