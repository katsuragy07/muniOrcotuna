import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebExpedienteComponent } from './web-expediente.component';

describe('WebExpedienteComponent', () => {
  let component: WebExpedienteComponent;
  let fixture: ComponentFixture<WebExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
