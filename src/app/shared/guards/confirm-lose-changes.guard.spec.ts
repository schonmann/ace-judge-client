import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmLoseChangesGuard } from './confirm-lose-changes.guard';

describe('ConfirmLoseChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmLoseChangesGuard]
    });
  });

  it('should ...', inject([ConfirmLoseChangesGuard], (guard: ConfirmLoseChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
