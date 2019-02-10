import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemsComponent } from './components/problems/problems.component';
import { ProblemsRoutingModule } from './problems-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [ProblemsComponent],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    MaterialModule
  ],
})
export class ProblemsModule { }
