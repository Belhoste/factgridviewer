import { TestBed } from '@angular/core/testing';

import { ItemSparqlService } from './item-sparql.service';

describe('ItemSparqlService', () => {
  let service: ItemSparqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemSparqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
