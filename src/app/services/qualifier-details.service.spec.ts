import { TestBed } from '@angular/core/testing';

import { QualifierDetailsService } from './qualifier-details.service';

describe('QualifierDetailsService', () => {
  let service: QualifierDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualifierDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
