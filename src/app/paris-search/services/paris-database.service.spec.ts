import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './ParisDatabase.service';

describe('ParisDatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
