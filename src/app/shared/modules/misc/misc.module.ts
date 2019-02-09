import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [LogoComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [LogoComponent]
})
export class MiscModule { }
