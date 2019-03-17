import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ContestService } from 'src/app/modules/api/contest.service';
import * as moment from 'moment';
import { DateHelper } from 'src/app/shared/helper/date-helper';
import { MatDialog } from '@angular/material';

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
    field: "numberOfParticipants",
  }, {
    label: "Data Início",
    field: "startDate",
  }, {
    label: "Data Fim",
    field: "endDate",
  }, {
    label: "Duração",
    field: "duration",
  }, {
    label: "Senha?",
    field: "requiresPassword",
  }];

  constructor(private contestService : ContestService, private dialog : MatDialog) { }

  ngOnInit() {
  }

  retrievePage(page: number, size : number): Promise<any> {
    return this.contestService.findByFilter(page, size).then((page: any) => {
      return {
        items: page.content.map((c : any) => {
          let startDate : moment.Moment = moment(c.startDate);
          let endDate : moment.Moment = moment(c.endDate);
          let diff : moment.Duration = moment.duration(endDate.diff(startDate));
          return {
            id: c.id,
            name: c.name,
            numberOfParticipants: c.numberOfParticipants,
            startDate: startDate.format('DD-MM-YYYY'),
            endDate: endDate.format('DD-MM-YYYY'),
            duration: `${diff.asHours()}H`,
            requiresPassword: c.requiresPassword ? "Sim" : "Não",
            alreadyParticipating: c.alreadyParticipating ,
          }
        }),
      }
    });
  }

  joinContest(contest : any) {
  }
}
