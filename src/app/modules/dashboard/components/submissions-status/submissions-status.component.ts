import { Component, OnInit } from '@angular/core';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { ProblemSubmissionStatusHelper } from 'src/app/shared/helper/problem-submission-status-helper';

@Component({
  selector: 'app-submissions-status',
  templateUrl: './submissions-status.component.html',
  styleUrls: ['./submissions-status.component.scss']
})
export class SubmissionsStatusComponent implements OnInit {

  single = [
  ];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showLabels = true;

  colorScheme = {
    domain: ['#7B1FA2', '#3AA454', '#50BCD4', '#1C4DFF']
  };

  constructor(private problemSubmissionService : ProblemSubmissionService) {}
  
  ngOnInit(): void {
    this.problemSubmissionService.getSubmissionStatistics().subscribe((res : any) => {
      let submissionsByStatus = Object.keys(res.numberSubmittedWithStatus).map(k => {
        return { name: ProblemSubmissionStatusHelper.getNameByEnumValue(k), value: res.numberSubmittedWithStatus[k] }
      });
      this.single = [...submissionsByStatus];
    });
  }

  onSelect(event) {
    console.log(event)
  }
}
