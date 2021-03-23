import { TestBed } from '@angular/core/testing';

import { PanelTramitesService } from './panel-tramites.service';

describe('PanelTramitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelTramitesService = TestBed.get(PanelTramitesService);
    expect(service).toBeTruthy();
  });
});
