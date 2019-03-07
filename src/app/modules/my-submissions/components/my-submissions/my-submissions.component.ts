import { Component, OnInit } from '@angular/core';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ProblemSubmissionStatusHelper } from 'src/app/shared/helper/ProblemSubmissionStatusHelper';
import { ProblemCategoryHelper } from 'src/app/shared/helper/ProblemCategoryHelper';

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
  }];

  constructor(private problemSubmissionService: ProblemSubmissionService) { }

  ngOnInit() {
  }

  retrievePage(page: number, size: number): Promise<any> {
    return this.problemSubmissionService.getMySubmissions(page, size).then(x => {
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
