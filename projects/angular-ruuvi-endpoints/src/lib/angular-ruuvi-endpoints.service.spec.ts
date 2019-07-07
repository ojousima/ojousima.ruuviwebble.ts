import { TestBed } from '@angular/core/testing';

import { AngularRuuviEndpointsService } from './angular-ruuvi-endpoints.service';

describe('AngularRuuviEndpointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularRuuviEndpointsService = TestBed.get(AngularRuuviEndpointsService);
    expect(service).toBeTruthy();
  });
});
