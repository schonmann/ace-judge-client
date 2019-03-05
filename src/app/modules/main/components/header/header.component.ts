import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/api/user.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private user : any;

  constructor(private router: Router, private userService: UserService, private authService : AuthService, private toastrService : ToastrService) { }

  private logout(): void {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/app/auth'])
    }, error => {
      this.toastrService.error('Erro ao fazer logout!')
    })
  }

  ngOnInit() {
    this.userService.getUserData().subscribe(res => {
      console.log(res);
      this.user = res;
    })
  }
}
