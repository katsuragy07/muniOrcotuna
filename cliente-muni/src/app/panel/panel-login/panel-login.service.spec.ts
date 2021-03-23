import { TestBed } from '@angular/core/testing';

import { PanelLoginService } from './panel-login.service';

describe('PanelLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelLoginService = TestBed.get(PanelLoginService);
    expect(service).toBeTruthy();
  });
});
