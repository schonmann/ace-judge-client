import { NavItem } from './../../models/nav-item';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() menuItems : NavItem[];

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  isMenuPermitted(item : any) {
    return !item.neededRoles || !item.neededRoles.some((x : string) => {
      return !this.authService.hasRole(x)
    })
  }

}
