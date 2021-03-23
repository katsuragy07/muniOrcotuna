import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPortadaComponent } from './panel-portada.component';

describe('PanelPortadaComponent', () => {
  let component: PanelPortadaComponent;
  let fixture: ComponentFixture<PanelPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
