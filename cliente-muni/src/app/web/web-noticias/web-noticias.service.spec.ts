import { TestBed } from '@angular/core/testing';

import { WebNoticiasService } from './web-noticias.service';

describe('WebNoticiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebNoticiasService = TestBed.get(WebNoticiasService);
    expect(service).toBeTruthy();
  });
});
