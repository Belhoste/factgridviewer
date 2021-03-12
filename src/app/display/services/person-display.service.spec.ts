import { TestBed } from '@angular/core/testing';

import { PersonDisplayService } from './person-display.service';

describe('PersonDisplayService', () => {
  let service: PersonDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
