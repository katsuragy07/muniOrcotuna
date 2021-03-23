import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGestionComponent } from './web-gestion.component';

describe('WebGestionComponent', () => {
  let component: WebGestionComponent;
  let fixture: ComponentFixture<WebGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
