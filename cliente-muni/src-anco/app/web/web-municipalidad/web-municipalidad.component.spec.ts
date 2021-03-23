import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMunicipalidadComponent } from './web-municipalidad.component';

describe('WebMunicipalidadComponent', () => {
  let component: WebMunicipalidadComponent;
  let fixture: ComponentFixture<WebMunicipalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebMunicipalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMunicipalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
