import { TestBed } from '@angular/core/testing';

import { TypologyService } from './typology.service';

describe('TypologyService', () => {
  let service: TypologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
