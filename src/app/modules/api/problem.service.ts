import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProblemFilter } from 'src/app/shared/models/problem-filter';

@Injectable()
export class ProblemService {

  private baseUrl: string = 'api/problem';

  constructor(private http: HttpClient) { }

  findByFilter(page: number, size: number, filter: ProblemFilter): Promise<any> {

    let params = new HttpParams()

    params.append("page", page.toString())
    params.append("size", size.toString())

    if (filter.id) {
      params.append("id", filter.id.toString())
    }

    if (filter.name) {
      params.append("name", filter.name)
    }

    if (filter.category) {
      params.append("category.category", filter.category)
    }

    if (filter.difficulty) {
      params.append("difficulty", filter.difficulty)
    }

    return this.http.get(`${this.baseUrl}/query`, { params }).toPromise();
  }
}
