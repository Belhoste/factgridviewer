import { TestBed } from '@angular/core/testing';

import { SourcesDisplayService } from './sources-display.service';

describe('SourcesDisplayService', () => {
  let service: SourcesDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourcesDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
