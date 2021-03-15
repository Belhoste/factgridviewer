import { TestBed } from '@angular/core/testing';

import { SetDateService } from './set-date.service';

describe('SetDateService', () => {
  let service: SetDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
