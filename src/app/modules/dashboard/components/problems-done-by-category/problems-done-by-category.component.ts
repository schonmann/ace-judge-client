import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems-done-by-category',
  templateUrl: './problems-done-by-category.component.html',
  styleUrls: ['./problems-done-by-category.component.scss']
})
export class ProblemsDoneByCategoryComponent {

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single: this.single })
  }

  onSelect(event) {
    console.log(event);
  }
}
