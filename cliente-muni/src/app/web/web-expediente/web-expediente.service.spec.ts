import { TestBed } from '@angular/core/testing';

import { WebExpedienteService } from './web-expediente.service';

describe('WebExpedienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebExpedienteService = TestBed.get(WebExpedienteService);
    expect(service).toBeTruthy();
  });
});
