import { TestBed } from '@angular/core/testing';

import { SetSparqlService } from './set-sparql.service';

describe('SetSparqlService', () => {
  let service: SetSparqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetSparqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
