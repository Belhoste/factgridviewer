import { TestBed } from '@angular/core/testing';

import { SparqlInterceptorService } from './sparql-interceptor.service';

describe('SparqlInterceptorService', () => {
  let service: SparqlInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparqlInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
