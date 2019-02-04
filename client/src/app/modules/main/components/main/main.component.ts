import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private menuItems: NavItem[] = [
    {
      displayName: "Estatísticas",
      route: "dashboard",
      iconName: "recent_actors",
      active: true,
    },
    {
      displayName: "Lista de Problemas",
      route: "problem-list",
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
  ];
  
  constructor() {
  }

  ngOnInit() {  
  }
}