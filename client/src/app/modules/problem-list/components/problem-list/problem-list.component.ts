import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {

  tableColumns : TableColumn[] = [{
    label: "#",
    field: "id",
  }, {
    label: "Nome",
    field: "name",
  }, {
    label: "Sucesso %",
    field: "success",
  }];

  constructor() { }

  ngOnInit() {
  }

  retrievePage(pageIndex: number, pageSize : number): Promise<any> {
    return new Promise<any>((resolve) => {
      resolve({
        items: [{
          id: 1,
          name: "Be like Bumble",
          success: 14.75,
        }, {
          id: 2,
          name: "Sherlock and The Cost",
          success: 24.75,
        }, {
          id: 3,
          name: "Mathworks ",
          success: 33.75,
        }, {
          id: 4,
          name: "Cash-in that carry!",
          success: 43.75,
        }, {
          id: 5,
          name: "Crop-circles and tryangles",
          success: 92.12,
        }, {
          id: 6,
          name: "High and Risen",
          success: 22.53,
        }, {
          id: 7,
          name: "Can you even type?",
          success: 1.33,
        }, {
          id: 8,
          name: "ICNS Assignment",
          success: 46.2,
        }].slice(pageIndex*pageSize, pageIndex*pageSize + pageSize),
        total: 8,
      });
    });
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
