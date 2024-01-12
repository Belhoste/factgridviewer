import { TestBed } from '@angular/core/testing';

import { SortingDataAccessorService } from './sorting-data-accessor.service';

describe('SortingDataAccessorService', () => {
  let service: SortingDataAccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingDataAccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
