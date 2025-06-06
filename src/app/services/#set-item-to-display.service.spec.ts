import { TestBed } from '@angular/core/testing';

import { SetItemToDisplayService } from './set-item-to-display.service';

describe('SetItemToDisplayService', () => {
  let service: SetItemToDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetItemToDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

