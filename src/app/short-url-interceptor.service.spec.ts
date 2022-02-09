import { TestBed } from '@angular/core/testing';

import { ShortUrlInterceptorService } from './short-url-interceptor.service';

describe('ShortUrlInterceptorService', () => {
  let service: ShortUrlInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortUrlInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
