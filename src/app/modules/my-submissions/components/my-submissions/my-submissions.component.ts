import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { ProblemSubmissionCorrectnessStatusHelper } from 'src/app/shared/helper/problem-submission-correctness-status-helper';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';
import { LanguageHelper } from 'src/app/shared/helper/language-helper';
import { ProblemSubmissionAnalysisStatusHelper } from 'src/app/shared/helper/problem-submission-analysis-status-helper';

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
    label: "Status de Correção",
    field: "correctnessStatus",
  }, {
    label: "Status de Análise",
    field: "analysisStatus",
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

          let correctnessStatusName = ProblemSubmissionCorrectnessStatusHelper
            .getStatusNameByEnumValue(ps.correctnessStatus)
          let correctnessStatusColor = ProblemSubmissionCorrectnessStatusHelper
            .getStatusColorByEnumValue(ps.correctnessStatus)

          let analysisStatusName = ProblemSubmissionAnalysisStatusHelper
            .getStatusNameByEnumValue(ps.analysisStatus)
          let analysisStatusColor = ProblemSubmissionAnalysisStatusHelper
            .getStatusColorByEnumValue(ps.analysisStatus)

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
            correctnessStatus: `<span style="color:${correctnessStatusColor}">${correctnessStatusName}</span>`, 
            analysisStatus: `<span style="color:${analysisStatusColor}">${analysisStatusName}</span>`, 
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
