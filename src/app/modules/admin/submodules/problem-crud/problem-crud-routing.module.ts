import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemCrudComponent } from './components/problem-crud/problem-crud.component';
import { ConfirmLoseChangesGuard } from 'src/app/shared/guards/confirm-lose-changes.guard';
import { ProblemEditComponent } from './components/problem-edit/problem-edit.component';

const routes: Routes = [
  { path: '', component: ProblemCrudComponent, pathMatch: 'full' },
  { path: 'edit', component: ProblemEditComponent, canDeactivate: [ ConfirmLoseChangesGuard ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemCrudRoutingModule { }
