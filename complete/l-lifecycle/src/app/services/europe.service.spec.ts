import { TestBed } from '@angular/core/testing';

import { EuropeService } from './europe.service';

describe('EuropeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EuropeService = TestBed.get(EuropeService);
    expect(service).toBeTruthy();
  });
});
