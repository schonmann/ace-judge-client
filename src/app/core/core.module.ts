import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '../core/interceptor/api-interceptor'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class CoreModule { }
