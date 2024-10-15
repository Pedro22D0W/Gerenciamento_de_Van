import { TestBed } from '@angular/core/testing';

import { VansAPIService } from './vans-api.service';

describe('VansAPIService', () => {
  let service: VansAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VansAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
