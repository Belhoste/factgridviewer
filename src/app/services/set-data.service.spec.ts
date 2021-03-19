import { TestBed } from '@angular/core/testing';

import { SetDataService } from './set-data.service';

describe('SetItemService', () => {
  let service: SetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
