import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from 'src/app/shared/modules/misc/components/not-found/not-found.component';
import { AuthGuardService } from 'src/app/core/authentication/auth-guard.service';
import { AdminGuardService } from 'src/app/core/authentication/admin-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
      // { path: 'problems', loadChildren: '../problems/problems.module#ProblemsModule' },
      { path: 'problems', loadChildren: '../problems/problems.module#ProblemsModule' },
      { path: 'contests', loadChildren: '../contests/contests.module#ContestsModule' },
      { path: 'problem-register', loadChildren: '../problem-register/problem-register.module#ProblemRegisterModule' },
      { path: 'my-submissions', loadChildren: '../my-submissions/my-submissions.module#MySubmissionsModule' },
      { path: 'rankings', loadChildren: '../rankings/rankings.module#RankingsModule' },
      { path: 'credits', loadChildren: '../credits/credits.module#CreditsModule' },
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule', canActivateChild: [AdminGuardService] },
      { path: '**', component: NotFoundComponent, pathMatch: 'full' },
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
