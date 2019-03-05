import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  grantedAuthorities : Array<string>;

  adminOptions : Array<any> = [
    {
      name: "Problemas", // create new problems.
      neededAuthorities: ["PROBLEM_CRUD"]
    },
    {
      name: "Usuários", // add/remove users, grant powers.
      neededAuthorities: ["USER_CRUD"]
    },
    {
      name: "Competições", // create contests.
      neededAuthorities: ["CONTEST_CRUD"],
    }
  ];

  constructor(private authService : AuthService) {}

  ngOnInit() {
    this.grantedAuthorities = this.authService.getAuthorities()
  }

}
