import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestsComponent } from './components/contests/contests.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';

@NgModule({
  declarations: [ContestsComponent],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    MaterialModule,
    PaginatedTableModule
  ]
})
export class ContestsModule { }
