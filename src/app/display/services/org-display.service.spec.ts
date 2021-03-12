import { TestBed } from '@angular/core/testing';

import { OrgDisplayService } from './org-display.service';

describe('OrgDisplayService', () => {
  let service: OrgDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
