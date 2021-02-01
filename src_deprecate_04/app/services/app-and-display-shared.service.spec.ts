import { TestBed } from '@angular/core/testing';

import { AppAndDisplaySharedService } from './app-and-display-shared.service';

describe('AppAndDisplaySharedService', () => {
  let service: AppAndDisplaySharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAndDisplaySharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
