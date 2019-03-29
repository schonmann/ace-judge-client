import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './components/credits/credits.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [CreditsComponent],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    MaterialModule
  ]
})
export class CreditsModule { }
