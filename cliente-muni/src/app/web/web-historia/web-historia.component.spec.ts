import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHistoriaComponent } from './web-historia.component';

describe('WebHistoriaComponent', () => {
  let component: WebHistoriaComponent;
  let fixture: ComponentFixture<WebHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
