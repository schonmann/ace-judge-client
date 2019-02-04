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
  }];

  constructor() { }

  ngOnInit() {
  }

  retrievePage(pageIndex: number, pageSize : number): Promise<any> {
    return new Promise<any>((resolve) => {
      resolve({
        items: [{
          id: 1,
          name: "Sherlock and The Cost",
        }, {
          id: 2,
          name: "Sherlock and The Cost",
        }, {
          id: 3,
          name: "Sherlock and The Cost",
        }, {
          id: 4,
          name: "Sherlock and The Cost",
        }, {
          id: 5,
          name: "Sherlock and The Cost",
        }, {
          id: 6,
          name: "Sherlock and The Cost",
        }, {
          id: 7,
          name: "Sherlock and The Cost",
        }, {
          id: 8,
          name: "Sherlock and The Cost",
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
