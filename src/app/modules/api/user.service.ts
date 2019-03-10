import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl : string = 'api/user';

  constructor(private http: HttpClient) { }

  getUserData(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/data`)
  }
}
