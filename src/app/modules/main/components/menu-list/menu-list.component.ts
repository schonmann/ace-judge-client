import { NavItem } from './../../models/nav-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Output() changeMenu = new EventEmitter();
  @Input() menuItems : NavItem[];

  constructor(private authService : AuthService, private route : ActivatedRoute) { }

  ngOnInit() {
    // let menu = this.menuItems.find(x => x.active)
    // this.changeMenu.emit(menu)
  }

  isMenuPermitted(item : any) {
    return !item.neededRoles || !item.neededRoles.some((x : string) => {
      return !this.authService.hasRole(x)
    })
  }

  click(item : any) {
    this.changeMenu.emit(item)
  }
}
