import { TestBed } from '@angular/core/testing';

import { PoultryregisterService } from './poultryregister.service';

describe('PoultryregisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoultryregisterService = TestBed.get(PoultryregisterService);
    expect(service).toBeTruthy();
  });
});
