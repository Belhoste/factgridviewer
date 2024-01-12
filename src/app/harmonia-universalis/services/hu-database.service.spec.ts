import { TestBed } from '@angular/core/testing';

import { HuDatabaseService } from './hu-database.service';

describe('HuDatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
