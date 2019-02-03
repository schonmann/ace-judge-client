import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MiscModule } from 'src/app/shared/modules/misc/misc.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MaterialModule,
    MiscModule,
  ]
})
export class AuthModule { }
