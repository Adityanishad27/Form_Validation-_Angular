import { TestBed } from '@angular/core/testing';

import { RegistartionServicesService } from './registartion-services.service';

describe('RegistartionServicesService', () => {
  let service: RegistartionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistartionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
