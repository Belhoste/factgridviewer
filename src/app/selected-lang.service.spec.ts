import { TestBed } from '@angular/core/testing';

import { SelectedLangService } from './selected-lang.service';

describe('SelectedLangService', () => {
  let service: SelectedLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
