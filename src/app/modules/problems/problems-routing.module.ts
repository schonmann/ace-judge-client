import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemsComponent } from './components/problems/problems.component';

const routes: Routes = [
  { path: '', component: ProblemsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }