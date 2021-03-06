import { TestBed } from '@angular/core/testing';

import { BackListService } from './back-list.service';

describe('BackListService', () => {
  let service: BackListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
