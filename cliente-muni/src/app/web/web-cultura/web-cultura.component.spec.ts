import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCulturaComponent } from './web-cultura.component';

describe('WebCulturaComponent', () => {
  let component: WebCulturaComponent;
  let fixture: ComponentFixture<WebCulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebCulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
