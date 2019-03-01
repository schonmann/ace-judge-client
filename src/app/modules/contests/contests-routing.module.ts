import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestsComponent } from './components/contests/contests.component';

const routes: Routes = [
  { path: '', component: ContestsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestsRoutingModule { }
