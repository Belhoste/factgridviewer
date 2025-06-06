import { TestBed } from '@angular/core/testing';

import { BlockDisplayService } from './block-display.service';

describe('BlockDisplayService', () => {
  let service: BlockDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
