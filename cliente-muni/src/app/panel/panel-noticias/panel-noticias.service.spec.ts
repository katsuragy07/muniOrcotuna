import { TestBed } from '@angular/core/testing';

import { PanelNoticiasService } from './panel-noticias.service';

describe('PanelNoticiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelNoticiasService = TestBed.get(PanelNoticiasService);
    expect(service).toBeTruthy();
  });
});
