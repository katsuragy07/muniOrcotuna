import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGastronomiaComponent } from './web-gastronomia.component';

describe('WebGastronomiaComponent', () => {
  let component: WebGastronomiaComponent;
  let fixture: ComponentFixture<WebGastronomiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebGastronomiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
