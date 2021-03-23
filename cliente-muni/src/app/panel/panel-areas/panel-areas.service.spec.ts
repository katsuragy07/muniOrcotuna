import { TestBed } from '@angular/core/testing';

import { PanelAreasService } from './panel-areas.service';

describe('PanelAreasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelAreasService = TestBed.get(PanelAreasService);
    expect(service).toBeTruthy();
  });
});
