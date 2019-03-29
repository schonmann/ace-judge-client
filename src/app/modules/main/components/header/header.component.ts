import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/storage/storage.service';
import { StompService } from '@stomp/ng2-stompjs';
import { NotificationSubject } from 'src/app/shared/enum/notification-subject';
import { ProblemSubmissionStatusHelper } from 'src/app/shared/helper/problem-submission-status-helper';
import { FilePickerComponent } from 'src/app/shares/modules/misc/components/file-picker/file-picker.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 

  user : any;
  notificationList : Array<any> = [];

  constructor(
    private router: Router, 
    private authService : AuthService, 
    private toastrService : ToastrService, 
    private stompService : StompService) { }

  logout(): void {
    this.router.navigate(['/app/auth']).then(x => {
      this.authService.logout().subscribe(res => {
        this.toastrService.success("Logout realizado com sucesso!")
      }, error => {
        this.toastrService.error('Erro ao fazer logout!')
      })
    })
  }

  removeNotification(index : number) {
    this.notificationList.splice(index, 1)
  }

  ngOnInit() {
    this.user = this.authService.getSession()
    this.stompService.subscribe(`/notifications/${this.user.id}`).subscribe(message => {
      let x = JSON.parse(message.body)
      switch(x.subject) {
        case NotificationSubject.SUBMISSION_VERDICT:
          this.toastrService.clear()
          let statusName = ProblemSubmissionStatusHelper.getNameByEnumValue(x.verdict)
          this.notificationList.push({
            message: `Veredito da submissão #${x.submissionId}: ${statusName}!`,
          })
          break
      }
    })
  }
}
