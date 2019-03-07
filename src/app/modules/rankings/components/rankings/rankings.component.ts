import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { RankService } from 'src/app/modules/api/rank.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent {

  tableColumns: TableColumn[] = [{
    label: "Posição",
    field: (item, index, page, size) => ((page * size) + index + 1) + "º"
  }, {
    label: "Nome",
    field: "name",
  }, {
    label: "Problemas Resolvidos",
    field: "numberOfProblemsSolved",
  }];

  constructor(private rankService: RankService) { }

  retrievePage(page : number, size : number) : Promise<any> {
    return this.rankService.getGeneralRank(page, size).then((x: any) => {
      return {
        items: x.content.map((c) => {
          return {
            name: c.name,
            numberOfProblemsSolved: c.numberOfProblemsSolved
          }
        }),
        total: x.totalElements,
      }
    });
  };
}
