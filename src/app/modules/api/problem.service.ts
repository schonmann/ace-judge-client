import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProblemFilter } from 'src/app/shared/models/problem-filter';
import { Problem } from 'src/app/shared/models/problem';

@Injectable()
export class ProblemService {

  private baseUrl: string = 'api/problem';

  constructor(private http: HttpClient) { }

  findByFilter(page: number, size: number, filter: ProblemFilter): Promise<any> {

    let params = new HttpParams().set("page", page.toString()).set("size", size.toString())

    if (filter.id) {
      params = params.set("id", filter.id.toString())
    }

    if (filter.name) {
      params = params.set("name", filter.name)
    }

    if (filter.category) {
      params = params.set("category.category", filter.category)
    }

    if (filter.difficulty) {
      params = params.set("difficulty", filter.difficulty)
    }

    return this.http.get(`${this.baseUrl}/query`, { params }).toPromise();
  }

  save(p : Problem) {
    return this.http.post(`${this.baseUrl}/save`, p);
  }

  getById(id : number) {
    return this.http.get(`${this.baseUrl}/getById`, { 
      params: new HttpParams().set("id", id.toString()),
    });
  }
}
