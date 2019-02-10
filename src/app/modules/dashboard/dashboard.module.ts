import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProblemsDoneComponent } from './components/problems-done/problems-done.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { ProblemsDoneByCategoryComponent } from './components/problems-done-by-category/problems-done-by-category.component';
import { SubmissionRatesComponent } from './components/submission-rates/submission-rates.component';

@NgModule({
  declarations: [DashboardComponent, ProblemsDoneComponent, ChartCardComponent, ProblemsDoneByCategoryComponent, SubmissionRatesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
