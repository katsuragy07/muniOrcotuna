import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAsideComponent } from './web-aside.component';

describe('WebAsideComponent', () => {
  let component: WebAsideComponent;
  let fixture: ComponentFixture<WebAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
