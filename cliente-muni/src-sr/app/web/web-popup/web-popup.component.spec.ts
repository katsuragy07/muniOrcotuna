import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPopupComponent } from './web-popup.component';

describe('WebPopupComponent', () => {
  let component: WebPopupComponent;
  let fixture: ComponentFixture<WebPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
