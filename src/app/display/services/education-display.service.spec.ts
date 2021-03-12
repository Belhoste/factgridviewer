import { TestBed } from '@angular/core/testing';

import { EducationDisplayService } from './education-display.service';

describe('EducationDisplayService', () => {
  let service: EducationDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
