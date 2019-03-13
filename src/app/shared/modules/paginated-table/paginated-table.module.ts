import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MiscModule } from '../misc/misc.module';
import { PaginatedTableComponent } from './components/paginated-table/paginated-table.component';
import { PaginatedTableRoutingModule } from './paginated-table-routing.module';


@NgModule({
  declarations: [PaginatedTableComponent],
  imports: [
    MiscModule,
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
