import { TestBed } from '@angular/core/testing';

import { SetSubtitleService } from './set-subtitle.service';

describe('SetSubtitleService', () => {
  let service: SetSubtitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetSubtitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
