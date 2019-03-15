import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  private baseUrl: string = 'api/contest';

  constructor(private http : HttpClient) { }

  findByFilter(page: number, size: number): Promise<any> {
    let params = new HttpParams()
    params.set('page', page.toString());
    params.set('size', size.toString());
    return this.http.get(`${this.baseUrl}/query`, { params }).toPromise();
  }
}
