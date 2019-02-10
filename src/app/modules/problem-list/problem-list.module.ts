import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemListRoutingModule } from './problem-list-routing.module';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [ProblemListComponent],
  imports: [
    CommonModule,
    ProblemListRoutingModule,
    PaginatedTableModule,
    MaterialModule
  ]
})
export class ProblemListModule { }
