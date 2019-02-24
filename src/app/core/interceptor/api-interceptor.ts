import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(@Inject('BASE_API_URL') private apiUrl: string) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.apiUrl);
    const apiReq = req.clone({ 
      withCredentials: true,
      url: `${this.apiUrl}/${req.url}`,
    });
    return next.handle(apiReq);
  }
}