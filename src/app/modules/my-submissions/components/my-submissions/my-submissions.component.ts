import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { parseCookieValue } from '@angular/common/src/cookie';

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
    label: "ID Problema",
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

  // val id : Long,
  // val status : ProblemSubmissionStatusEnum,
  // val category : ProblemCategory,
  // val contest : String?,
  // val problemId : Long,
  // val problemName: String

  retrievePage(page: number, size: number): Promise<any> {
    return this.problemSubmissionService.getMySubmissions(page, size).then(x => {
      return {
        items: x.content.map((ps) => {
          let statusName = this.problemSubmissionService.getStatusNameByEnumString(ps.status)
          let statusColor = this.problemSubmissionService.getStatusColorByEnumString(ps.status)
          return {
            id: ps.id,
            problemId: ps.problemId,
            problemName: ps.problemName,
            // success: 14.75, //TODO: trazer da api.
            // level: "Avançado", //TODO: trazer da api.
            result: `<span style="color:green">${statusName}</span>`, 
            contest: ps.contest ? ps.contest : " - ",
            category: ps.category,
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
