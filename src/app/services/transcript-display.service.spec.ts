import { TestBed } from '@angular/core/testing';

import { TranscriptDisplayService } from './transcript-display.service';

describe('TranscriptDisplayService', () => {
  let service: TranscriptDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranscriptDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
