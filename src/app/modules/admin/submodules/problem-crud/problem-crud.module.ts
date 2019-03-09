import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemCrudRoutingModule } from './problem-crud-routing.module';
import { ProblemCrudComponent } from './components/problem-crud/problem-crud.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import { ConfirmLoseChangesGuard } from 'src/app/shared/guards/confirm-lose-changes.guard';

@NgModule({
  declarations: [ProblemCrudComponent],
  imports: [
    CommonModule,
    ProblemCrudRoutingModule,
    MaterialModule,
    FormsModule,
    CKEditorModule,
  ],
  providers: [
    ConfirmLoseChangesGuard
  ]
})
export class ProblemCrudModule { }
