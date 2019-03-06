import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProblemSubmissionStatusEnum } from 'src/app/shared/enum/ProblemSubmissionStatusEnum';

@Injectable()
export class ProblemSubmissionService {
  private baseUrl : string = 'api/problem-submission';

  constructor(private http: HttpClient) { }

  getMySubmissions(page : number, size : number): Promise<any> {
    return this.http.get(`${this.baseUrl}/mine?page=${page}&size=${size}`).toPromise();
  }

  getStatusNameByEnumString(enumString : string) : string {
    switch(enumString) {
      case ProblemSubmissionStatusEnum.CORRECT_ANSWER:
        return "Resposta Correta"
      case ProblemSubmissionStatusEnum.COMPILE_ERROR:
        return "Erro de Compilação"
      case ProblemSubmissionStatusEnum.JUDGE_QUEUE:
        return "Fila"
      case ProblemSubmissionStatusEnum.RUNTIME_ERROR:
        return "Erro de Execução"
      case ProblemSubmissionStatusEnum.WRONG_ANSWER:
        return "Resposta Incorreta"
      case ProblemSubmissionStatusEnum.WRONG_COMPLEXITY:
        return "Complexidade Incorreta"
      default:
        return "ENUM_ERROR"
    }
  }

  getStatusColorByEnumString(enumString : string) : string {
    switch(enumString) {
      case ProblemSubmissionStatusEnum.CORRECT_ANSWER:
        return "#50C878"
      case ProblemSubmissionStatusEnum.COMPILE_ERROR:
        return "#FF0000"
      case ProblemSubmissionStatusEnum.JUDGE_QUEUE:
        return "#AAAAAA"
      case ProblemSubmissionStatusEnum.RUNTIME_ERROR:
        return "#FF0000"
      case ProblemSubmissionStatusEnum.WRONG_ANSWER:
        return "#FF0000"
      case ProblemSubmissionStatusEnum.WRONG_COMPLEXITY:
        return "#FF0000"
      default:
        return "ENUM_ERROR"
    }
  }
}
