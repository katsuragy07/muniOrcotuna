import { TestBed } from '@angular/core/testing';

import { PanelIndexService } from './panel-index.service';

describe('PanelIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelIndexService = TestBed.get(PanelIndexService);
    expect(service).toBeTruthy();
  });
});
