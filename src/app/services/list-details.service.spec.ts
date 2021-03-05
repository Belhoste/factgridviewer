import { TestBed } from '@angular/core/testing';

import { ListDetailsService } from './list-details.service';

describe('ListDetailsService', () => {
  let service: ListDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
