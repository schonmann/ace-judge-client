import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/storage/storage.service';
import { StompService } from '@stomp/ng2-stompjs';

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

  ngOnInit() {
    this.user = this.authService.getSession()
    console.log(this.user)
    this.stompService.subscribe(`/notifications/${this.user.id}`).subscribe(message => {
      let x = JSON.parse(message.body)
      this.toastrService.clear()
      this.toastrService.success(x.message, "Submissões")
      this.notificationList.push({
        message: x.message,
        subject: x.subject
      })
    })
  }
}
