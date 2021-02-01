import { TestBed } from '@angular/core/testing';

import { CreateItemToDisplayService } from './create-item-to-display.service';

describe('CreateItemToDisplayService', () => {
  let service: CreateItemToDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateItemToDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
