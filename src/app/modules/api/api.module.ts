import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { RankService } from './rank.service';
import { ProblemSubmissionService } from './problem-submission.service';
import { ProblemService } from './problem.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    RankService,
    ProblemSubmissionService,
    ProblemService,
  ],
})
export class ApiModule { }
