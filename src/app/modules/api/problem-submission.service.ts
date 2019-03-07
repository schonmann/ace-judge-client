import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProblemSubmissionService {
  private baseUrl : string = 'api/problem-submission';

  constructor(private http: HttpClient) { }

  getMySubmissions(page : number, size : number): Promise<any> {
    return this.http.get(`${this.baseUrl}/mine`, {
      params: {
        page: page.toString(),
        size: size.toString(),
      }
    }).toPromise();
  }
}
