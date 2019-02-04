import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingsComponent } from './components/rankings/rankings.component';

@NgModule({
  declarations: [RankingsComponent],
  imports: [
    CommonModule,
    RankingsRoutingModule
  ]
})
export class RankingsModule { }
