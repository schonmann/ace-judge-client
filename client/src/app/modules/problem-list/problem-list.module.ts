import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemListRoutingModule } from './problem-list-routing.module';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

@NgModule({
  declarations: [ProblemListComponent],
  imports: [
    CommonModule,
    ProblemListRoutingModule
  ]
})
export class ProblemListModule { }
