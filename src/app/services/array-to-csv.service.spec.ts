import { TestBed } from '@angular/core/testing';

import { ArrayToCsvService } from './array-to-csv.service';

describe('ArrayToCsvService', () => {
  let service: ArrayToCsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayToCsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
