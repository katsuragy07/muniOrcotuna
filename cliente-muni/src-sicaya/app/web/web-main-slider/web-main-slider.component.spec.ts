import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMainSliderComponent } from './web-main-slider.component';

describe('WebMainSliderComponent', () => {
  let component: WebMainSliderComponent;
  let fixture: ComponentFixture<WebMainSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebMainSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
