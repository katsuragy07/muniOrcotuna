import { TestBed } from '@angular/core/testing';

import { PanelGeneralService } from './panel-general.service';

describe('PanelGeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelGeneralService = TestBed.get(PanelGeneralService);
    expect(service).toBeTruthy();
  });
});
