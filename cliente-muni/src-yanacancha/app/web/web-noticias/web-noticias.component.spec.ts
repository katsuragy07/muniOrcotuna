import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNoticiasComponent } from './web-noticias.component';

describe('WebNoticiasComponent', () => {
  let component: WebNoticiasComponent;
  let fixture: ComponentFixture<WebNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
