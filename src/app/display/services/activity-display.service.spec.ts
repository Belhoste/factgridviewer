import { TestBed } from '@angular/core/testing';

import { ActivityDisplayService } from './activity-display.service';

describe('ActivityDisplayService', () => {
  let service: ActivityDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
