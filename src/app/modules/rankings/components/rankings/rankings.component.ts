import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  tableColumns: TableColumn[] = [{
    label: "Posição",
    field: "position",
  }, {
    label: "Nome",
    field: "name",
  }, {
    label: "Problemas Resolvidos",
    field: "solved",
  }];

  pipes: any = {
    "position": (x) => x + "º"
  };

  constructor() { }

  ngOnInit() {
  }

  retrievePage(pageIndex: number, pageSize: number): Promise<any> {
    return new Promise<any>((resolve) => {
      resolve({
        items: [
          {
            position: 1,
            name: "Astolfo",
            solved: 10,
          },
          {
            position: 2,
            name: "Josivaldo",
            solved: 8,
          },
          {
            position: 3,
            name: "Biruleibe",
            solved: 5,
          },
          {
            position: 4,
            name: "Josefaque",
            solved: 4,
          },
          {
            position: 5,
            name: "Tulipeu",
            solved: 3,
          },
          {
            position: 6,
            name: "Juqueto",
            solved: 2,
          },
          {
            position: 7,
            name: "Maulo",
            solved: 1,
          }
        ].slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
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
