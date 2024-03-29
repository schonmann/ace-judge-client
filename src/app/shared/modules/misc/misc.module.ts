import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmLoseChangesDialogComponent } from './components/confirm-lose-changes-dialog/confirm-lose-changes-dialog.component';
import { MaterialModule } from '../material/material.module';
import { EscapeHtmlPipe } from '../../pipes/escape-html-pipe';
import { ProblemDifficultyPipe } from '../../pipes/problem-difficulty-pipe';
import { FilePickerComponent } from 'src/app/shared/modules/misc/components/file-picker/file-picker.component';

@NgModule({
  declarations: [
    LogoComponent, 
    NotFoundComponent, 
    ConfirmLoseChangesDialogComponent,
    EscapeHtmlPipe,
    ProblemDifficultyPipe,
    FilePickerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    LogoComponent,
    EscapeHtmlPipe,
    ProblemDifficultyPipe,
    FilePickerComponent
  ],
  entryComponents: [
    ConfirmLoseChangesDialogComponent,
  ]
})
export class MiscModule { }
