import { TestBed } from '@angular/core/testing';

import { WebConvocatoriasService } from './web-convocatorias.service';

describe('WebConvocatoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebConvocatoriasService = TestBed.get(WebConvocatoriasService);
    expect(service).toBeTruthy();
  });
});
