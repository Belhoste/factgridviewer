import { TestBed } from '@angular/core/testing';

import { TechnicalitiesDisplayService } from './technicalities-display.service';

describe('TechnicalitiesDisplayService', () => {
  let service: TechnicalitiesDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalitiesDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
