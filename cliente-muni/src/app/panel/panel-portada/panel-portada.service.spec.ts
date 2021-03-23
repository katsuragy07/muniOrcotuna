import { TestBed } from '@angular/core/testing';

import { PanelPortadaService } from './panel-portada.service';

describe('PanelPortadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelPortadaService = TestBed.get(PanelPortadaService);
    expect(service).toBeTruthy();
  });
});
