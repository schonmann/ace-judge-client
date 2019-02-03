import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports: [
    PaginationComponent,
  ]
})
export class PaginationModule { }
