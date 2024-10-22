import { TestBed } from '@angular/core/testing';

import { PropertiesListService } from './properties-list.service';

describe('PropertiesListService', () => {
  let service: PropertiesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
