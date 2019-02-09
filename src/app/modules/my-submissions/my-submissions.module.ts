import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySubmissionsRoutingModule } from './my-submissions-routing.module';
import { MySubmissionsComponent } from './components/my-submissions/my-submissions.component';

@NgModule({
  declarations: [MySubmissionsComponent],
  imports: [
    CommonModule,
    MySubmissionsRoutingModule
  ]
})
export class MySubmissionsModule { }
