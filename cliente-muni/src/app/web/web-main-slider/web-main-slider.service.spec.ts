import { TestBed } from '@angular/core/testing';

import { WebMainSliderService } from './web-main-slider.service';

describe('WebMainSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebMainSliderService = TestBed.get(WebMainSliderService);
    expect(service).toBeTruthy();
  });
});
