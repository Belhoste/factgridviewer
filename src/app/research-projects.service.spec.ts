import { TestBed } from '@angular/core/testing';

import { ResearchProjectsService } from './research-projects.service';

describe('ResearchProjectsService', () => {
  let service: ResearchProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
