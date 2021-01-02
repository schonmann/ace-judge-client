import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-value',
  templateUrl: './field-value.component.html',
  styleUrls: ['./field-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldValueComponent implements OnInit {
  @Input() name : string;
  constructor() {
  }
  ngOnInit() {
  }
}