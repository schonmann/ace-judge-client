import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MiscModule } from '../misc/misc.module';
import { AnalysisOutputComponent } from './components/analysis-output/analysis-output.component';
import { FieldValueComponent } from './components/field-value/field-value.component';
import { HeadingComponent } from './components/heading/heading.component';


@NgModule({
  declarations: [FieldValueComponent, HeadingComponent, AnalysisOutputComponent],
  imports: [
    MiscModule,
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [FieldValueComponent, HeadingComponent, AnalysisOutputComponent]
})
export class AppComponentsModule { }
