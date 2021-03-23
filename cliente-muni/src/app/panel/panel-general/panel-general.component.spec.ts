import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGeneralComponent } from './panel-general.component';

describe('PanelGeneralComponent', () => {
  let component: PanelGeneralComponent;
  let fixture: ComponentFixture<PanelGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
