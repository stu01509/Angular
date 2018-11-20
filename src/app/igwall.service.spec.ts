import { TestBed } from '@angular/core/testing';

import { IGWallService } from './igwall.service';

describe('IGWallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IGWallService = TestBed.get(IGWallService);
    expect(service).toBeTruthy();
  });
});
