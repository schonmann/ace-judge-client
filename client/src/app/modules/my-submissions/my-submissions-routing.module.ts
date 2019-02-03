import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySubmissionsComponent } from './components/my-submissions/my-submissions.component';

const routes: Routes = [
  { path: '', component: MySubmissionsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySubmissionsRoutingModule { }
