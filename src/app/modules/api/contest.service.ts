import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map, every } from 'rxjs/operators'
import { pipeFromArray } from 'rxjs/internal/util/pipe';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  private baseUrl: string = 'api/contest';

  constructor(private http: HttpClient) { }

  private contestTransform(): Array<OperatorFunction<any, any>> {
    return [
      map((x: any) => {
        x.startDate = new Date(x.startDate)
        x.endDate = new Date(x.endDate)
        return x
      })
    ]
  }

  getById(id: number): Observable<Object> {
    return pipeFromArray([...this.contestTransform()])(
      this.http.get(`${this.baseUrl}/getById`, {
        params: {
          'id': id.toString()
        }
      }))
  }

  getByIdIfAuthorized(id: number): Observable<Object> {
    return pipeFromArray([...this.contestTransform()])(
      this.http.get(`${this.baseUrl}/getByIdIfAuthorized`, {
        params: {
          'id': id.toString()
        }
      }))
  }

  findByFilter(page: number, size: number): Promise<any> {
    return pipeFromArray([...this.contestTransform()])(
      this.http.get(`${this.baseUrl}/query`, {
        params: {
          'page': page.toString(),
          'size': size.toString(),
        }
      })).toPromise()
  }

  joinContest(contestId: number, password: string): Observable<Object> {
    return this.http.post(`${this.baseUrl}/join`, {
      contestId,
      password
    })
  }

  save(contest: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, contest)
  }
}
