import { Component, OnInit, Input } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { RankService } from 'src/app/modules/api/rank.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent {

  @Input() contest : any;

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
    let p = this.contest ? this.rankService.getContestRank(page, size, this.contest.id) : this.rankService.getGeneralRank(page, size)
    return p.then((x: any) => {
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
