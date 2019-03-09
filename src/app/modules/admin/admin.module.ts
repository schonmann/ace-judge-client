import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ApiModule } from '../api/api.module';
import { MiscModule } from 'src/app/shared/modules/misc/misc.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ApiModule,
    MiscModule
  ],
})
export class AdminModule { }
