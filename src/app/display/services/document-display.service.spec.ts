import { TestBed } from '@angular/core/testing';

import { PubDisplayService } from './document-display.service';

describe('PubDisplayService', () => {
  let service: PubDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
