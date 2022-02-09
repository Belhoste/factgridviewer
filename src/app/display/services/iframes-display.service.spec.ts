import { TestBed } from '@angular/core/testing';

import { IframesDisplayService } from './iframes-display.service';

describe('IframesDisplayService', () => {
  let service: IframesDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IframesDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
