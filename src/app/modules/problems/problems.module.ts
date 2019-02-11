import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemsComponent } from './components/problems/problems.component';
import { ProblemsRoutingModule } from './problems-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProblemFilterComponent } from './components/problem-filter/problem-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProblemsComponent, ProblemFilterComponent],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    MaterialModule,
    FormsModule,
  ],
})
export class ProblemsModule { }
