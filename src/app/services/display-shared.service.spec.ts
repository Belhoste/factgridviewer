import { TestBed } from '@angular/core/testing';

import { DisplaySharedService } from './display-shared.service';

describe('DisplaySharedService', () => {
  let service: DisplaySharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaySharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
