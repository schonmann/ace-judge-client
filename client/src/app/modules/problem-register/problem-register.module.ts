import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemRegisterRoutingModule } from './problem-register-routing.module';
import { ProblemRegisterComponent } from './components/problem-register/problem-register.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProblemRegisterComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [ProblemRegisterComponent],
  imports: [
    CommonModule,
    ProblemRegisterRoutingModule
  ]
})
export class ProblemRegisterModule { }
