import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySubmissionsRoutingModule } from './my-submissions-routing.module';
import { MySubmissionsComponent } from './components/my-submissions/my-submissions.component';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [MySubmissionsComponent],
  imports: [
    CommonModule,
    MySubmissionsRoutingModule,
    PaginatedTableModule,
    MaterialModule,
  ]
})
export class MySubmissionsModule { }
