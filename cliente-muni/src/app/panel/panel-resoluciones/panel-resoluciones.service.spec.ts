import { TestBed } from '@angular/core/testing';

import { PanelResolucionesService } from './panel-resoluciones.service';

describe('PanelResolucionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelResolucionesService = TestBed.get(PanelResolucionesService);
    expect(service).toBeTruthy();
  });
});
