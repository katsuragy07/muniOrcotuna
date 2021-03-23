import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTurismoComponent } from './web-turismo.component';

describe('WebTurismoComponent', () => {
  let component: WebTurismoComponent;
  let fixture: ComponentFixture<WebTurismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebTurismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
