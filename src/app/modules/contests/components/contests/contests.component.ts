import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {

  tableColumns : TableColumn[] = [{
    label: "#",
    field: "id",
  }, {
    label: "Nome",
    field: "name",
  }, {
    label: "Participantes",
    field: "members",
  }, {
    label: "Data Início",
    field: "startDate",
  }, {
    label: "Data Fim",
    field: "endDate",
  }, {
    label: "Duração",
    field: "",
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
          level: "Expert",
        }, {
          id: 2,
          name: "Sherlock and The Cost",
          success: 24.75,
          level: "Hard",
        }, {
          id: 3,
          name: "Mathworks ",
          success: 33.75,
          level: "Medium",
        }, {
          id: 4,
          name: "Cash-in that carry!",
          success: 43.75,
          level: "Medium",
        }, {
          id: 5,
          name: "Crop-circles and tryangles",
          success: 92.12,
          level: "Easy",
        }, {
          id: 6,
          name: "High and Risen",
          success: 22.53,
          level: "Advanced",
        }, {
          id: 7,
          name: "Can you even type?",
          success: 1.33,
          level: "Expert",
        }, {
          id: 8,
          name: "ICNS Assignment",
          success: 46.2,
          level: "Medium",
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
