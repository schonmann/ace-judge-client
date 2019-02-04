import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemListRoutingModule } from './problem-list-routing.module';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';

@NgModule({
  declarations: [ProblemListComponent],
  imports: [
    CommonModule,
    ProblemListRoutingModule,
    PaginatedTableModule,
  ]
})
export class ProblemListModule { }
