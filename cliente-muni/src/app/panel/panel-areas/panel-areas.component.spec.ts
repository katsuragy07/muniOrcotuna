import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAreasComponent } from './panel-areas.component';

describe('PanelAreasComponent', () => {
  let component: PanelAreasComponent;
  let fixture: ComponentFixture<PanelAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
