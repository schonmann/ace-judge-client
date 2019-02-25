import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    @Inject('BASE_API_URL') private apiUrl: string, 
    @Inject(Router) private router : Router,
    @Inject(ToastrService) private toastrService : ToastrService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.apiUrl);
    const apiReq = req.clone({
      withCredentials: true,
      url: `${this.apiUrl}/${req.url}`,
    });
    return next.handle(apiReq).do(event => { }, err => {
      if (err instanceof HttpErrorResponse && err.status == 401) {
        this.toastrService.error('Acesso negado!')
        this.router.navigate(["/"]);
      }
    });
  }
}