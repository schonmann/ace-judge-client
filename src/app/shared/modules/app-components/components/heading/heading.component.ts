import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent implements OnInit {
  @Input() variant : string;
  constructor() {
  }
  ngOnInit() {
    console.log(this.variant);
  }
}
