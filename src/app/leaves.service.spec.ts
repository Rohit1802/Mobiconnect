import { TestBed } from '@angular/core/testing';

import { LeavesService } from './leaves.service';

describe('LeavesServiceService', () => {
  let service: LeavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
