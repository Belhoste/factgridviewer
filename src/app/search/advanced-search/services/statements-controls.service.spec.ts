import { TestBed } from '@angular/core/testing';

import { StatementsControlsService } from './statements-controls.service';

describe('StatementsControlsService', () => {
  let service: StatementsControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatementsControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
