import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';
import { MySubmissionsComponent } from './components/my-submissions/my-submissions.component';
import { MySubmissionsRoutingModule } from './my-submissions-routing.module';


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
