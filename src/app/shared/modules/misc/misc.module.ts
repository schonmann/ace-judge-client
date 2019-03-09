import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmLoseChangesDialogComponent } from './components/confirm-lose-changes-dialog/confirm-lose-changes-dialog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LogoComponent, NotFoundComponent, ConfirmLoseChangesDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LogoComponent],
  entryComponents: [
    ConfirmLoseChangesDialogComponent
  ]
})
export class MiscModule { }
