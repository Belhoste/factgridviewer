import { TestBed } from '@angular/core/testing';

import { SetLanguageService } from './set-language.service';

describe('SetLanguageService', () => {
  let service: SetLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
