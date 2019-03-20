import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestsComponent } from './components/contests/contests.component';
import { ContestViewComponent } from './components/contest-view/contest-view.component';
import { ProblemViewComponent } from '../problems/components/problem-view/problem-view.component';

const routes: Routes = [
  { path: '', component: ContestsComponent, pathMatch: 'full'},
  { path: 'view/:contestId', component: ContestViewComponent, pathMatch: 'full'},
  { path: 'view/:contestId/problem/:problemId', component: ProblemViewComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestsRoutingModule { }
