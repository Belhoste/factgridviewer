import { TestBed } from '@angular/core/testing';

import { BackListDetailsService } from './back-list-details.service';

describe('BackListDetailsService', () => {
  let service: BackListDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackListDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
