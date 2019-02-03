import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from 'src/app/shared/modules/misc/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
      { path: 'problems', loadChildren: '../problems/problems.module#ProblemsModule' },
      { path: '**', component: NotFoundComponent, pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
