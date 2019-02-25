import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {
  }

  public login(form : FormData) : Observable<Object> {
    return this.http.post('login', form);
  }

  public logout() : Observable<Object> {
    return this.http.post('logout', {})
  }

  public isAuthenticated() : boolean {
    return true;
  }
}
