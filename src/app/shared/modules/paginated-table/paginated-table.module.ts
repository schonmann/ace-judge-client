import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatedTableRoutingModule } from './paginated-table-routing.module';
import { PaginatedTableComponent } from './components/paginated-table/paginated-table.component';
import { MaterialModule } from '../material/material.module';
import { EscapeHtmlPipe } from '../../pipes/escape-html-pipe';

@NgModule({
  declarations: [PaginatedTableComponent, EscapeHtmlPipe],
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
