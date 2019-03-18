import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestCrudComponent } from './components/contest-crud/contest-crud.component';
import { ContestEditComponent } from './components/contest-edit/contest-edit.component';
import { ConfirmLoseChangesGuard } from 'src/app/shared/guards/confirm-lose-changes.guard';

const routes: Routes = [
  { path: '', component: ContestCrudComponent, pathMatch: 'full'},
  { path: 'edit', component: ContestEditComponent, pathMatch: 'full', canDeactivate: [ ConfirmLoseChangesGuard ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestCrudRoutingModule { }
