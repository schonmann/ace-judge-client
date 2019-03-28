import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './modules/main/main.module';
import { MiscModule } from './shared/modules/misc/misc.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptor/api-interceptor';
import { ToastrModule } from 'ngx-toastr'
import { StompConfig, StompService } from '@stomp/ng2-stompjs';

const stompConfig: StompConfig = {
  // Which server?
  url: 'ws://localhost:8080/websocket',

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    // login: 'guest',
    // passcode: 'guest'
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MiscModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [{
    provide: 'BASE_API_URL',
    useValue: environment.api.port ? `${environment.api.url}:${environment.api.port}` : environment.api.url,
  }, {
    provide: 'WEBSOCKET_URL',
    useValue: environment.websocket.port ? `${environment.websocket.url}:${environment.websocket.port}` : environment.websocket.url,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }, 
  StompService,
  {
    provide: StompConfig,
    useValue: stompConfig
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }