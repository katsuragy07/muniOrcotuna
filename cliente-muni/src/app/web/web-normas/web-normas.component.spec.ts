import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNormasComponent } from './web-normas.component';

describe('WebNormasComponent', () => {
  let component: WebNormasComponent;
  let fixture: ComponentFixture<WebNormasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebNormasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNormasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
