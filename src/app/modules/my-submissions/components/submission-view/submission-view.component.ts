import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { ToastrService } from 'ngx-toastr';
import { Submission } from 'src/app/shared/models/submission';

@Component({
  selector: 'app-submission-view',
  templateUrl: './submission-view.component.html',
  styleUrls: ['./submission-view.component.scss']
})
export class SubmissionViewComponent implements OnInit {

  submission? : Submission

  constructor(private submissionService : ProblemSubmissionService, private problemSubmissionService : ProblemSubmissionService, private router : Router, private route : ActivatedRoute, private toastrService : ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const id = params['submissionId']
      if(!id) {
        return;
      }
      this.submission = await this.submissionService.getById(id);
    })
  }
}
