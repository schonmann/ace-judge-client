import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { ProblemSubmissionStatusHelper } from 'src/app/shared/helper/problem-submission-status-helper';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';
import { LanguageHelper } from 'src/app/shared/helper/language-helper';

@Component({
  selector: 'app-my-submissions',
  templateUrl: './my-submissions.component.html',
  styleUrls: ['./my-submissions.component.scss']
})
export class MySubmissionsComponent implements OnInit {

  tableColumns: TableColumn[] = [{
    label: "#",
    field: "id",
  }, {
    label: "Problema",
    field: "problemId",
  }, {
    label: "Nome",
    field: "problemName",
  }, {
    label: "Resultado",
    field: "result",
  }, {
    label: "Competição",
    field: "contest",
  }, {
    label: "Categoria",
    field: "category",
  }, {
    label: "Linguagem",
    field: "language",
  }, {
    label: "Tempo de Execução",
    field: "runtime"
  }];

  constructor(private problemSubmissionService: ProblemSubmissionService) { }

  ngOnInit() {
  }

  retrievePage(page: number, size: number): Promise<any> {
    return this.problemSubmissionService.getMySubmissions(page, size).toPromise().then((x : any) => {
      return {
        items: x.content.map((ps) => {

          let statusName = ProblemSubmissionStatusHelper
            .getNameByEnumValue(ps.status)
          let statusColor = ProblemSubmissionStatusHelper
            .getColorByEnumValue(ps.status)

          let categoryName = ProblemCategoryHelper
            .getStatusNameByEnumValue(ps.category)
          let categoryColor = ProblemCategoryHelper
            .getStatusColorByEnumValue(ps.category)

          let languageName = LanguageHelper.getStatusNameByEnumValue(ps.language)

          return {
            id: ps.id,
            problemId: ps.problemId,
            problemName: ps.problemName,
            // success: 14.75, //TODO: trazer da api.
            // level: "Avançado", //TODO: trazer da api.
            result: `<span style="color:${statusColor}">${statusName}</span>`, 
            executionTime: ps.executionTime,
            contest: ps.contest ? ps.contest : " - ",
            category: `<span style="color:${categoryColor}">${categoryName}</span>`,
            language: languageName,
            runtime: `${ps.runtime.toFixed(3)}s`,
          }
        }),
        total: x.totalElements,
      }
    })
  }

  clickProblem(item: any, index) {
    console.log('Clicou no item!')
    console.log(item);
  }

  viewProblem(item: any, index: number) {
    console.log('Chamou função!')
    console.log(item);
  }
}
