import { TestBed } from '@angular/core/testing';

import { CareerDisplayService } from './career-display.service';

describe('CareerDisplayService', () => {
  let service: CareerDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
