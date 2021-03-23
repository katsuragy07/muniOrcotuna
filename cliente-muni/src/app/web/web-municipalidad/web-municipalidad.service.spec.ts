import { TestBed } from '@angular/core/testing';

import { WebMunicipalidadService } from './web-municipalidad.service';

describe('WebMunicipalidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebMunicipalidadService = TestBed.get(WebMunicipalidadService);
    expect(service).toBeTruthy();
  });
});
