import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ContestService } from 'src/app/modules/api/contest.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { DateHelper } from 'src/app/shared/helper/date-helper';

@Component({
  selector: 'app-contest-crud',
  templateUrl: './contest-crud.component.html',
  styleUrls: ['./contest-crud.component.scss']
})
export class ContestCrudComponent implements OnInit {

  tableColumns: TableColumn[] = [{
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

  ngOnInit(): void {

  }

  constructor(private contestService : ContestService, private router : Router, private route : ActivatedRoute) { }

  retrievePage(page : number, size : number) : Promise<any> {
      
    return this.contestService.findByFilter(page, size).then((page: any) => {
      return {
        items: page.content.map((c) => {
          let startDate: moment.Moment = moment(c.startDate);
          let endDate: moment.Moment = moment(c.endDate);
          let diff: moment.Duration = moment.duration(endDate.diff(startDate));
          return {
            id: c.id,
            name: c.name,
            numberOfParticipants: c.numberOfParticipants,
            startDate: startDate.format('DD-MM-YYYY HH:mm'),
            endDate: endDate.format('DD-MM-YYYY HH:mm'),
            duration: `${DateHelper.durationToTimeString(diff)}H`,
            requiresPassword: c.requiresPassword ? "Sim" : "Não",
            alreadyParticipating: c.alreadyParticipating,
          }
        }),
        total: page.totalElements,
      }
    });
  };

  clickItem(item : any) {
    this.router.navigate(['edit'], { queryParams: { id: item.id }, relativeTo: this.route})
  }
}
