import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MiscModule } from 'src/app/shared/modules/misc/misc.module';
import { CoreModule } from '@angular/flex-layout';
import { ApiModule } from '../api/api.module';

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
    CoreModule,
    ApiModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ]
})
export class AuthModule { }
