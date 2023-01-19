import { TestBed } from '@angular/core/testing';

import { RoleOfObjectRenderingService } from './role-of-object-rendering.service';

describe('RoleOfObjectRenderingService', () => {
  let service: RoleOfObjectRenderingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleOfObjectRenderingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
