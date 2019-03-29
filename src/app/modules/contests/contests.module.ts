import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { PaginatedTableModule } from 'src/app/shared/modules/paginated-table/paginated-table.module';
import { ContestViewComponent } from './components/contest-view/contest-view.component';
import { ContestsComponent } from './components/contests/contests.component';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';
import { ContestsRoutingModule } from './contests-routing.module';
import { MiscModule } from 'src/app/shared/modules/misc/misc.module';
import { ProblemsModule } from '../problems/problems.module';
import { RankingsModule } from '../rankings/rankings.module';
import { ContestCrudModule } from '../admin/submodules/contest-crud/contest-crud.module';
import { ProblemCrudModule } from '../admin/submodules/problem-crud/problem-crud.module';


@NgModule({
  declarations: [ContestsComponent, PasswordDialogComponent, ContestViewComponent],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    MaterialModule,
    PaginatedTableModule,
    FormsModule,
    MiscModule,
    ProblemsModule,
    RankingsModule,
  ],
  entryComponents: [
    PasswordDialogComponent
  ]
})
export class ContestsModule { }
