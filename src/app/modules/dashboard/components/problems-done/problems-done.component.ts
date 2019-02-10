import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems-done',
  templateUrl: './problems-done.component.html',
  styleUrls: ['./problems-done.component.scss']
})
export class ProblemsDoneComponent {

  single = [
    {
      "name": "Done",
      "value": 10
    },
    {
      "name": "Todo",
      "value": 150
    },
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showLabels = true;

  colorScheme = {
    domain: ['#7B1FA2', '#5AA454', '#00BCD4', '#7C4DFF']
  };

  constructor() {
  }

  onSelect(event) {
    console.log(event);
  }
}
