import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RankService {

  private baseUrl : string = 'api/rank';

  constructor(private http: HttpClient) { }

  getGeneralRank(page : number, size : number): Promise<any> {
    return this.http.get(`${this.baseUrl}/general`, {
      params: {
        page: page.toString(),
        size: size.toString(),
      }
    }).toPromise();
  }
}
