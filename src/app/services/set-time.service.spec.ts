import { TestBed } from '@angular/core/testing';

import { SetTimeService } from './set-time.service';

describe('SetTimeService', () => {
  let service: SetTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
