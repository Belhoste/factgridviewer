import { TestBed } from '@angular/core/testing';

import { ItemDisplayDispatcherService } from './item-display-dispatcher.service';

describe('ItemDisplayDispatcherService', () => {
  let service: ItemDisplayDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDisplayDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
