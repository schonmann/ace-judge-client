import { NavItem } from './../../models/nav-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() menuItems : NavItem[];

  constructor() { }

  ngOnInit() {
  }

}
