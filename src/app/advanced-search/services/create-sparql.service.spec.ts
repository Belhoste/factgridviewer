import { TestBed } from '@angular/core/testing';

import { CreateSparqlService } from './create-sparql.service';

describe('CreateSparqlService', () => {
  let service: CreateSparqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSparqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
