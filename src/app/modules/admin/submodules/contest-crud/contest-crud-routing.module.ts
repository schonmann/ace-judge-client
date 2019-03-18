import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestCrudComponent } from './components/contest-crud/contest-crud.component';
import { ContestEditComponent } from './components/contest-edit/contest-edit.component';

const routes: Routes = [
  { path: '', component: ContestCrudComponent, pathMatch: 'full'},
  { path: 'edit', component: ContestEditComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestCrudRoutingModule { }
