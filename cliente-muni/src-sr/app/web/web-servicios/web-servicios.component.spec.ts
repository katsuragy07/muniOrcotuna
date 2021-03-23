import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServiciosComponent } from './web-servicios.component';

describe('WebServiciosComponent', () => {
  let component: WebServiciosComponent;
  let fixture: ComponentFixture<WebServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
