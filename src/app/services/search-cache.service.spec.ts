import { TestBed } from '@angular/core/testing';

import { SearchCacheService } from './search-cache.service';

describe('SearchCacheService', () => {
  let service: SearchCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
