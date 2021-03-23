import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAnunciosComponent } from './panel-anuncios.component';

describe('PanelAnunciosComponent', () => {
  let component: PanelAnunciosComponent;
  let fixture: ComponentFixture<PanelAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
