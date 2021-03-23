import { TestBed } from '@angular/core/testing';

import { PanelConvocatoriasService } from './panel-convocatorias.service';

describe('PanelConvocatoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelConvocatoriasService = TestBed.get(PanelConvocatoriasService);
    expect(service).toBeTruthy();
  });
});
