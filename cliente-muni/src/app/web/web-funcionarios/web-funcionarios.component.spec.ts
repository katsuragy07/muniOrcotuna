import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFuncionariosComponent } from './web-funcionarios.component';

describe('WebFuncionariosComponent', () => {
  let component: WebFuncionariosComponent;
  let fixture: ComponentFixture<WebFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
