import { MiscModule } from './../../shared/modules/misc/misc.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [MainComponent, MenuListItemComponent, MenuListComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    DashboardModule,
    MiscModule,
    UserModule,
  ]
})
export class MainModule { }
