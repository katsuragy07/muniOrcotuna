import { TestBed } from '@angular/core/testing';

import { WebFooterService } from './web-footer.service';

describe('WebFooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebFooterService = TestBed.get(WebFooterService);
    expect(service).toBeTruthy();
  });
});
