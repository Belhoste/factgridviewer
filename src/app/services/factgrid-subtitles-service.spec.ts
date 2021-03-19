import { TestBed } from '@angular/core/testing';

import { FactgridSubtitlesService } from './factgrid-subtitles.service';

describe('FactgridSubtitlesService', () => {
  let service: FactgridSubtitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactgridSubtitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
