import { TestBed } from '@angular/core/testing';

import { ItemAndDisplaySharedService } from './item-and-display-shared.service';

describe('ItemAndDisplayService', () => {
  let service: ItemAndDisplaySharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemAndDisplaySharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
