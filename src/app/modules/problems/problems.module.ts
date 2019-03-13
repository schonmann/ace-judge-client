import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemsComponent } from './components/problems/problems.component';
import { ProblemsRoutingModule } from './problems-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProblemFilterComponent } from './components/problem-filter/problem-filter.component';
import { FormsModule } from '@angular/forms';
import { ApiModule } from '../api/api.module';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';
import { ProblemViewComponent } from './components/problem-view/problem-view.component';
import { MiscModule } from 'src/app/shared/modules/misc/misc.module';

@NgModule({
  declarations: [ProblemsComponent, ProblemFilterComponent, ProblemViewComponent],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    MaterialModule,
    FormsModule,
    PaginatedTableModule,
    ApiModule,
    FormsModule,
    MiscModule
  ],
})
export class ProblemsModule { }
