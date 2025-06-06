import { TestBed } from '@angular/core/testing';

import { GregorianToJulianCalendarService } from './gregorian-to-julian-calendar.service';

describe('GregorianToJulianCalendarService', () => {
  let service: GregorianToJulianCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GregorianToJulianCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
