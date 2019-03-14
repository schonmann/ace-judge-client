import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from 'src/app/shared/models/problem';
import { Observable } from 'rxjs';

@Injectable()
export class ProblemSubmissionService {
  private baseUrl: string = 'api/problem-submission';

  constructor(private http: HttpClient) { }

  getMySubmissions(page: number, size: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/mine`, {
      params: {
        page: page.toString(),
        size: size.toString(),
      }
    })
  }

  getSubmissionStatistics() : Observable<Object> {
    return this.http.get(`${this.baseUrl}/statistics`);
  }

  submitSolution(problemId: number, solution: File, contestId?: number): Observable<Object> {
    const formData = new FormData()

    formData.set('file', solution)
    formData.set('problemId', problemId.toString())
    formData.set('timestamp', new Date().getTime().toString())

    if (contestId) {
      formData.append('contestId', contestId.toString());
    }

    return this.http.post(`${this.baseUrl}/submit`, formData)
  }
}
