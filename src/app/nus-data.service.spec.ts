import { TestBed } from '@angular/core/testing';

import { NusDataServiceService } from './nus-data-service.service';

describe('NusDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NusDataServiceService = TestBed.get(NusDataServiceService);
    expect(service).toBeTruthy();
  });
});
