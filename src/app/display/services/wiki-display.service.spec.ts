import { TestBed } from '@angular/core/testing';

import { WikiDisplayService } from './wiki-display.service';

describe('WikiDisplayService', () => {
  let service: WikiDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
