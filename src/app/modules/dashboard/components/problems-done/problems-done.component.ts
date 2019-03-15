import { Component, OnInit } from '@angular/core';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';

@Component({
  selector: 'app-problems-done',
  templateUrl: './problems-done.component.html',
  styleUrls: ['./problems-done.component.scss']
})
export class ProblemsDoneComponent implements OnInit {

  single = [
    {
      "name": "Errado",
      "value": 0
    },
    {
      "name": "Correto",
      "value": 0
    },
  ];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showLabels = true;

  colorScheme = {
    domain: ['#7B1FA2', '#5AA454', '#00BCD4', '#7C4DFF']
  };

  constructor(private problemSubmissionService : ProblemSubmissionService) {}
  
  ngOnInit(): void {
    this.problemSubmissionService.getSubmissionStatistics().subscribe((res : any) => {
      this.single[0].value = res.numberErrored
      this.single[1].value = res.numberSolved
      this.single = [...this.single]
    });
  }

  onSelect(event) {
    console.log(event)
  }


}
