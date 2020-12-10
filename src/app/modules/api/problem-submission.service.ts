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

  async getById(submissionId: number): Promise<any> {
    const result = await this.http.get(`${this.baseUrl}/getById`, { 
      params: { 'id': submissionId.toString()},
    }).toPromise()
    return result;
  }

  getSubmissionStatistics() : Observable<Object> {
    return this.http.get(`${this.baseUrl}/statistics`);
  }

  submitSolution(problemId: number, solution: File, language : string, contestId?: number): Observable<Object> {
    const formData = new FormData()

    formData.set('file', solution)

    let params : any = {
      problemId: problemId.toString(),
      timestamp: new Date().getTime().toString(),
      contestId,
      language
    }

    formData.set('params', JSON.stringify(params))

    return this.http.post(`${this.baseUrl}/submit`, formData)
  }
}
