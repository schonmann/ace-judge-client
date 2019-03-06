import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { RankService } from './rank.service';
import { ProblemSubmissionService } from './problem-submission.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    RankService,
    ProblemSubmissionService,
  ],
})
export class ApiModule { }
