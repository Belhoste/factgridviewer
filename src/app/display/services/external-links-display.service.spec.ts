import { TestBed } from '@angular/core/testing';

import { ExternalLinksDisplayService } from './external-links-display.service';

describe('ExternalLinksDisplayService', () => {
  let service: ExternalLinksDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalLinksDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
