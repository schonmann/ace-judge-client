import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MiscModule } from '../misc/misc.module';
import { FieldValueComponent } from './components/field-value/field-value.component';
import { HeadingComponent } from './components/heading/heading.component';


@NgModule({
  declarations: [FieldValueComponent, HeadingComponent],
  imports: [
    MiscModule,
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [FieldValueComponent, HeadingComponent]
})
export class AppComponentsModule { }
