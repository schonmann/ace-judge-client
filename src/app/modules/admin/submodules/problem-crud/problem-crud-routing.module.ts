import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemCrudComponent } from './components/problem-crud/problem-crud.component';
import { ConfirmLoseChangesGuard } from 'src/app/shared/guards/confirm-lose-changes.guard';

const routes: Routes = [
  { path: '', component: ProblemCrudComponent, pathMatch: 'full', canDeactivate: [ ConfirmLoseChangesGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemCrudRoutingModule { }
