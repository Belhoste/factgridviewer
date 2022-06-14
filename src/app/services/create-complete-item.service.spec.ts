import { TestBed } from '@angular/core/testing';

import { CreateCompleteItemService } from './create-complete-item.service';

describe('CreateCompleteItemService', () => {
  let service: CreateCompleteItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCompleteItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
