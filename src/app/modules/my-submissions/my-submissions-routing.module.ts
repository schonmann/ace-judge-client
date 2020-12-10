import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySubmissionsComponent } from './components/my-submissions/my-submissions.component';
import { SubmissionViewComponent } from './components/submission-view/submission-view.component';

const routes: Routes = [
  { path: '', component: MySubmissionsComponent, pathMatch: 'full' },
  { path: 'view/:submissionId', component: SubmissionViewComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySubmissionsRoutingModule { }
