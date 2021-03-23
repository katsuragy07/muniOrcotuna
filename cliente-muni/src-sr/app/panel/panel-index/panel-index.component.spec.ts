import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelIndexComponent } from './panel-index.component';

describe('PanelIndexComponent', () => {
  let component: PanelIndexComponent;
  let fixture: ComponentFixture<PanelIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
