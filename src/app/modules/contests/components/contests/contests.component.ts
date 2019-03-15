import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ContestService } from 'src/app/modules/api/contest.service';

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

  constructor(private contestService : ContestService) { }

  ngOnInit() {
  }

  retrievePage(page: number, size : number): Promise<any> {
    return this.contestService.findByFilter(page, size).then((page: any) => {
      return {
        items: page.content.map((c : any) => {      
          return {
            id: c.id,
            name: c.name,
            numberOfParticipants: c.numberOfParticipants,
            startDate: new Date(c.startDate),
            endDate: new Date(c.endDate),
            duration: "14H30M",
            requiresPassword: c.requiresPassword
          }
        }),
      }
    });
  }

  viewContest() {
  }
}
