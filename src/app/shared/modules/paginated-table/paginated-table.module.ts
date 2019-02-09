import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatedTableRoutingModule } from './paginated-table-routing.module';
import { PaginatedTableComponent } from './components/paginated-table/paginated-table.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PaginatedTableComponent],
  imports: [
    CommonModule,
    PaginatedTableRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    PaginatedTableComponent,
  ]
})
export class PaginatedTableModule { }
