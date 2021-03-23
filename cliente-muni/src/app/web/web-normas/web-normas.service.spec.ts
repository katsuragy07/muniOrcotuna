import { TestBed } from '@angular/core/testing';

import { WebNormasService } from './web-normas.service';

describe('WebNormasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebNormasService = TestBed.get(WebNormasService);
    expect(service).toBeTruthy();
  });
});
