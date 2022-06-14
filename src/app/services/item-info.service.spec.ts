import { TestBed } from '@angular/core/testing';

import { ItemInfoService } from './item-info.service';

describe('ItemInfoService', () => {
  let service: ItemInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
