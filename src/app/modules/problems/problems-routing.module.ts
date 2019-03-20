import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemsComponent } from './components/problems/problems.component';
import { ProblemViewComponent } from './components/problem-view/problem-view.component';

const routes: Routes = [
  { path: '', component: ProblemsComponent, pathMatch: 'full'},
  { path: 'view/:problemId', component: ProblemViewComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }