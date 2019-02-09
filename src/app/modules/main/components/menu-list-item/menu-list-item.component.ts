import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {

  @Input() displayName : string;
  @Input() route : string;
  @Input() iconName : string;
  @Input() active : boolean;

  constructor() {}

  ngOnInit() {

  }
}
