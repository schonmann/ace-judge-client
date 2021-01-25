import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemCrudRoutingModule } from './problem-crud-routing.module';
import { ProblemCrudComponent } from './components/problem-crud/problem-crud.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import { ConfirmLoseChangesGuard } from 'src/app/shared/guards/confirm-lose-changes.guard';
import { ProblemEditComponent } from './components/problem-edit/problem-edit.component';
import { ApiModule } from 'src/app/modules/api/api.module';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';
import { MiscModule } from 'src/app/shared/modules/misc/misc.module';
import { AppComponentsModule } from 'src/app/shared/modules/app-components/app-components.module';
import { AnalysisOutputDialogComponent } from './components/problem-edit/components/analysis-output-dialog/analysis-output-dialog.component';
import { MathJaxModule } from 'ngx-mathjax';

@NgModule({
  entryComponents: [AnalysisOutputDialogComponent],
  declarations: [ProblemCrudComponent, ProblemEditComponent, AnalysisOutputDialogComponent],
  imports: [
    CommonModule,
    ProblemCrudRoutingModule,
    MaterialModule,
    FormsModule,
    CKEditorModule,
    ApiModule,
    PaginatedTableModule,
    MiscModule,
    AppComponentsModule,
    MathJaxModule.forChild(),
  ],
  providers: [
    ConfirmLoseChangesGuard
  ],
  exports: [
    ProblemCrudComponent
  ]
})
export class ProblemCrudModule { }
