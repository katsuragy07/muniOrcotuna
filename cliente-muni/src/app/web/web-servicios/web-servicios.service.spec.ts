import { TestBed } from '@angular/core/testing';

import { WebServiciosService } from './web-servicios.service';

describe('WebServiciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebServiciosService = TestBed.get(WebServiciosService);
    expect(service).toBeTruthy();
  });
});
