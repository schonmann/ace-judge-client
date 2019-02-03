import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemRegisterRoutingModule } from './problem-register-routing.module';
import { ProblemRegisterComponent } from './components/problem-register/problem-register.component';

@NgModule({
  declarations: [ProblemRegisterComponent],
  imports: [
    CommonModule,
    ProblemRegisterRoutingModule
  ]
})
export class ProblemRegisterModule { }
