import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemsComponent } from './components/problems/problems.component';
import { ProblemsRoutingModule } from './problems-routing.module';

@NgModule({
  declarations: [ProblemsComponent],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
  ],
})
export class ProblemsModule { }
