import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  categories : any = [
    {
      id: 1,
      name: "Programação Dinâmica",
    },
    {
      id: 2,
      name: "Geometria Computacional",
    },
    {
      id: 3,
      name: "Matemática",
    },
    {
      id: 4,
      name: "Strings",
    },
    {
      id: 4,
      name: "Ad-Hoc",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
