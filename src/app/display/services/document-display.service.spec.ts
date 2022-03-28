import { TestBed } from '@angular/core/testing';

import { DocumentDisplayService } from './document-display.service';

describe('DocumentDisplayService', () => {
  let service: DocumentDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
