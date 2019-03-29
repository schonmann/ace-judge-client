import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestCrudRoutingModule } from './contest-crud-routing.module';
import { ContestCrudComponent } from './components/contest-crud/contest-crud.component';
import { ContestEditComponent } from './components/contest-edit/contest-edit.component';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';
import { ApiModule } from 'src/app/modules/api/api.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MiscModule } from 'src/app/shared/modules/misc/misc.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmazingTimePickerModule } from 'amazing-time-picker'
import { ConfirmLoseChangesGuard } from 'src/app/shared/guards/confirm-lose-changes.guard';

@NgModule({
  declarations: [ContestCrudComponent, ContestEditComponent],
  imports: [
    CommonModule,
    ContestCrudRoutingModule,
    PaginatedTableModule,
    ApiModule,
    MaterialModule,
    MiscModule,
    CKEditorModule,
    FormsModule,
    AmazingTimePickerModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfirmLoseChangesGuard
  ],
  exports: [
    ContestCrudComponent,
  ]
})
export class ContestCrudModule { }
