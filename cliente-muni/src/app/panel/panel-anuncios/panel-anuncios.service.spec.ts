import { TestBed } from '@angular/core/testing';

import { PanelAnunciosService } from './panel-anuncios.service';

describe('PanelAnunciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelAnunciosService = TestBed.get(PanelAnunciosService);
    expect(service).toBeTruthy();
  });
});
