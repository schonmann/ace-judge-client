import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';

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
    label: "Nome",
    field: "name",
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

  constructor() { }

  ngOnInit() {
  }

  retrievePage(pageIndex: number, pageSize: number): Promise<any> {
    return new Promise<any>((resolve) => {
      resolve({
        items: [{
          id: 1,
          name: "Be like Bumble",
          success: 14.75,
          level: "Expert",
          result: "Complexidade Incorreta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 2,
          name: "Sherlock and The Cost",
          success: 24.75,
          level: "Hard",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 3,
          name: "Mathworks ",
          success: 33.75,
          level: "Medium",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 4,
          name: "Cash-in that carry!",
          success: 43.75,
          level: "Medium",
          result: "Complexidade Incorreta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 5,
          name: "Crop-circles and tryangles",
          success: 92.12,
          level: "Easy",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 6,
          name: "High and Risen",
          success: 22.53,
          level: "Advanced",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 7,
          name: "Can you even type?",
          success: 1.33,
          level: "Expert",
          result: "Complexidade Incorreta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 8,
          name: "ICNS Assignment",
          success: 46.2,
          level: "Medium",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 9,
          name: "High and Risen",
          success: 22.53,
          level: "Advanced",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 10,
          name: "Can you even type?",
          success: 1.33,
          level: "Expert",
          result: "Complexidade Incorreta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 11,
          name: "ICNS Assignment",
          success: 46.2,
          level: "Medium",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 12,
          name: "High and Risen",
          success: 22.53,
          level: "Advanced",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 13,
          name: "Can you even type?",
          success: 1.33,
          level: "Expert",
          result: "Complexidade Incorreta",
          contest: " - ",
          category: "Programação Dinâmica"
        }, {
          id: 14,
          name: "ICNS Assignment",
          success: 46.2,
          level: "Medium",
          result: "Complexidade Correta",
          contest: " - ",
          category: "Programação Dinâmica"
        }].slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
        total: 14,
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
