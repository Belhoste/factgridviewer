import { TestBed } from '@angular/core/testing';

import { SociabilityDisplayService } from './sociability-display.service';

describe('SociabilityDisplayService', () => {
  let service: SociabilityDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SociabilityDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
