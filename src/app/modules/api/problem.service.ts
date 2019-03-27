import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProblemFilter } from 'src/app/shared/models/problem-filter';
import { Problem } from 'src/app/shared/models/problem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    if (filter.visibility) {
      params = params.set("visibility", filter.visibility.toString())
    }

    return this.http.get(`${this.baseUrl}/query`, { params }).toPromise();
  }

  findByContest(page: number, size: number, contestId: number): Promise<any> {
    return this.http.get(`${this.baseUrl}/queryByContest`, {
      params: {
        page : page.toString(),
        size: size.toString(),
        contestId: contestId.toString()
      }
    }).toPromise();
  }

  save(p : Problem) {

    const formData = new FormData()

    formData.set('judgeInput', p.judgeInput)
    formData.set('judgeOutput', p.judgeOutput)
    formData.set('inputGenerator', p.inputGenerator)
    formData.set('params', JSON.stringify(p))

    return this.http.post(`${this.baseUrl}/save`, formData);
  }

  getById(id : number) {
    return this.http.get(`${this.baseUrl}/getById`, { 
      params: { 'id': id.toString()},
    });
  }

  getByNameContaining(page : number, size : number, name : string) {
    return this.http.get<Observable<Problem[]>>(`${this.baseUrl}/queryByName`, { 
      params: { 
        'page' : page.toString(),
        'size': size.toString(),
        'name': name,
      },
    }).pipe(
      map((x : any) => {
        return x.content
      })
    );
  }
}
