import { TestBed } from '@angular/core/testing';

import { PlaceDisplayService } from './place-display.service';

describe('PlaceDisplayService', () => {
  let service: PlaceDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
