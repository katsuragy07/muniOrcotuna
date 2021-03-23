import { TestBed } from '@angular/core/testing';

import { WebPopupService } from './web-popup.service';

describe('WebPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebPopupService = TestBed.get(WebPopupService);
    expect(service).toBeTruthy();
  });
});
