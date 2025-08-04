import { TestBed } from '@angular/core/testing';

import { WikibaseSearchService } from './wikibase-search.service';

describe('WikibaseSearchService', () => {
  let service: WikibaseSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikibaseSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
