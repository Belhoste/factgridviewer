import { TestBed } from '@angular/core/testing';

import { MutatorService } from './mutator.service';

describe('MutatorService', () => {
  let service: MutatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
