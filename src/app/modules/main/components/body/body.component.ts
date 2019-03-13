import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  menuItems: NavItem[] = [
    {
      displayName: "Estatísticas",
      route: "dashboard",
      iconName: "recent_actors",
      active: true,
    },
    {
      displayName: "Problemas",
      route: "problems",
      iconName: "list",
      active: false,
    },
    {
      displayName: "Competições",
      route: "contests",
      iconName: "list",
      active: false,
    },
    {
      displayName: "Minhas Submissões",
      route: "my-submissions",
      iconName: "check",
      active: false,
    },
    {
      displayName: "Rankings",
      route: "rankings",
      iconName: "star",
      active: false,
    },
    {
      displayName: "Sobre",
      route: "credits",
      iconName: "group",
      active: false,
    },
    {
      displayName: "Administração",
      route: "admin",
      iconName: "verified_user",
      active: false,
      neededRoles: ["ROLE_ADMIN"],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
