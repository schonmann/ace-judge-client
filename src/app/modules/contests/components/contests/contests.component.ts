import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ContestService } from 'src/app/modules/api/contest.service';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { DateHelper } from 'src/app/shared/helper/date-helper';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {

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

  constructor(private contestService: ContestService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  retrievePage(page: number, size: number): Promise<any> {
    return this.contestService.findByFilter(page, size).then((page: any) => {
      return {
        items: page.content.map((c: any) => {
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
      }
    });
  }

  private viewContest(contest : any) {
    this.router.navigate(['view', contest.id], { relativeTo: this.route})
  }

  clickContest(contest: any) {

    if (contest.alreadyParticipating) {
      this.viewContest(contest);
      return null
    }

    this.dialog.open(PasswordDialogComponent).afterClosed().subscribe((password : string) => {

      // join contest with password.

      this.contestService.joinContest(contest.id, password).subscribe(res => {
        this.toastrService.success("Bem vindo à competição! :)")
        this.viewContest(contest);
      }, error => {
        if (error.status === 403) {
          this.toastrService.error("Senha incorreta!")
        } else {
          this.toastrService.error("Erro ao entrar na competiçao!")
        }
      });
    })
  }

}
