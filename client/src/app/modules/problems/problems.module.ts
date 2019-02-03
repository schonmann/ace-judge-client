import { PaginationModule } from './../../shared/modules/pagination/pagination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemsComponent } from './components/problems/problems.component';
import { ProblemsRoutingModule } from './problems-routing.module';

@NgModule({
  declarations: [ProblemsComponent],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    PaginationModule,
  ],
})
export class ProblemsModule { }
