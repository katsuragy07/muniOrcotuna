import { TestBed } from '@angular/core/testing';

import { WebNoticiasDetalleService } from './web-noticias-detalle.service';

describe('WebNoticiasDetalleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebNoticiasDetalleService = TestBed.get(WebNoticiasDetalleService);
    expect(service).toBeTruthy();
  });
});
