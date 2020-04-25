import { TestBed } from '@angular/core/testing';

import { StepNavigationService } from './step-navigation.service';

describe('StepNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepNavigationService = TestBed.get(StepNavigationService);
    expect(service).toBeTruthy();
  });
});
