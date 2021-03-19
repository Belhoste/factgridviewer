import { TestBed } from '@angular/core/testing';

import { SetSelectedItemsListService } from './set-selected-items-list.service';

describe('SetSelectedItemsListService', () => {
  let service: SetSelectedItemsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetSelectedItemsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
