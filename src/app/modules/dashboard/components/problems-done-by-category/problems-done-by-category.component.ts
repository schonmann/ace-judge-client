import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems-done-by-category',
  templateUrl: './problems-done-by-category.component.html',
  styleUrls: ['./problems-done-by-category.component.scss']
})
export class ProblemsDoneByCategoryComponent {

  single = [
    {
      "name": "Programação Dinâmica",
      "value": 3
    },
    {
      "name": "Geometria",
      "value": 3
    },
    {
      "name": "Teoria dos Números",
      "value": 4
    }
  ];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Categoria';
  showYAxisLabel = true;
  yAxisLabel = 'Problemas Resolvidos';

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
