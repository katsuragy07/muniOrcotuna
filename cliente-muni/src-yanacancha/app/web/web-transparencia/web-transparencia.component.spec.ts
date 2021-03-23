import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTransparenciaComponent } from './web-transparencia.component';

describe('WebTransparenciaComponent', () => {
  let component: WebTransparenciaComponent;
  let fixture: ComponentFixture<WebTransparenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebTransparenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTransparenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
