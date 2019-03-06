import { TestBed } from '@angular/core/testing';

import { ProblemSubmissionService } from './problem-submission.service';

describe('ProblemSubmissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProblemSubmissionService = TestBed.get(ProblemSubmissionService);
    expect(service).toBeTruthy();
  });
});
