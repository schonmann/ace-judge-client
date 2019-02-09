import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/modules/misc/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'app', component: AppComponent, children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
      { path: 'main', loadChildren: './modules/main/main.module#MainModule' },
      { path: '**', component: NotFoundComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }