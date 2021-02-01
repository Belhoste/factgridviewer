import { TestBed } from '@angular/core/testing';

import { SelectedItemListService } from './selected-item-list.service';

describe('SelectedItemListService', () => {
  let service: SelectedItemListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedItemListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
