import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingsComponent } from './components/rankings/rankings.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [RankingsComponent],
  imports: [
    CommonModule,
    RankingsRoutingModule,
    PaginatedTableModule,
    MaterialModule,
    ApiModule
  ]
})
export class RankingsModule { }
