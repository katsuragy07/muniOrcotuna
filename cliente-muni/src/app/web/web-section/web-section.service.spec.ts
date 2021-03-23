import { TestBed } from '@angular/core/testing';

import { WebSectionService } from './web-section.service';

describe('WebSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebSectionService = TestBed.get(WebSectionService);
    expect(service).toBeTruthy();
  });
});
