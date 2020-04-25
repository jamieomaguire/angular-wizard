import { TestBed, async, inject } from '@angular/core/testing';

import { StepAccessGuard } from './step-access.guard';

describe('StepAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepAccessGuard]
    });
  });

  it('should ...', inject([StepAccessGuard], (guard: StepAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
