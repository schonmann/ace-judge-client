import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  grantedAuthorities: Array<string>;

  adminOptions: Array<any> = [
    {
      displayName: "Problemas",
      neededAuthorities: ["PROBLEM_CRUD"],
      route: "problem-crud",
      iconName: "recent_actors",
    },
    {
      displayName: "Usuários",
      neededAuthorities: ["USER_CRUD"],
      route: "user-crud",
      iconName: "recent_actors",
    },
    {
      displayName: "Competições",
      neededAuthorities: ["CONTEST_CRUD"],
      route: "contest-crud",
      iconName: "recent_actors",
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.grantedAuthorities = this.authService.getAuthorities()
  }

}
