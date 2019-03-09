import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from 'src/app/shared/modules/misc/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'problem-crud', loadChildren: './submodules/problem-crud/problem-crud.module#ProblemCrudModule' },
  { path: 'contest-crud', loadChildren: './submodules/contest-crud/contest-crud.module#ContestCrudModule' },
  { path: 'user-crud', loadChildren: './submodules/user-crud/user-crud.module#UserCrudModule' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
