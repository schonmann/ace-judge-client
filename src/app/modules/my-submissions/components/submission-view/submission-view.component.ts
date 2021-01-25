import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { ToastrService } from 'ngx-toastr';
import { Submission } from 'src/app/shared/models/submission';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';
import { LanguageHelper } from 'src/app/shared/helper/language-helper';
import { ProblemSubmissionAnalysisStatusEnum } from 'src/app/shared/enum/problem-submission-analysis-status-enum';
import { ProblemSubmissionAnalysisStatusHelper } from 'src/app/shared/helper/problem-submission-analysis-status-helper';
import { ProblemSubmissionCorrectnessStatusHelper } from 'src/app/shared/helper/problem-submission-correctness-status-helper';

@Component({
  selector: 'app-submission-view',
  templateUrl: './submission-view.component.html',
  styleUrls: ['./submission-view.component.scss']
})
export class SubmissionViewComponent implements OnInit {

  submission? : Submission
  categoryName : string
  languageName: string
  submitDate: string
  correctnessRuntime: string
  analysisOutput : any
  analysisStatus : any
  analysisStatusColor : any
  correctnessStatus : any
  correctnessStatusColor : any

  constructor(private submissionService : ProblemSubmissionService, private problemSubmissionService : ProblemSubmissionService, private router : Router, private route : ActivatedRoute, private toastrService : ToastrService) { }

  private mapAnalysisFunctionToViewObject(fn) : any {
    return {
      expression: fn.expression,
      parameters: fn.parameters,
      error: fn.error.toFixed(3),
      values: fn.values.map(x => x.toFixed(8)).join(', '),
    };
  }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const id = params['submissionId']
      if(!id) {
        return;
      }
      this.submission = await this.submissionService.getById(id);
      this.categoryName = ProblemCategoryHelper.getStatusNameByEnumValue(this.submission.category);
      this.languageName = LanguageHelper.getStatusNameByEnumValue(this.submission.language);
      this.correctnessRuntime = `${this.submission.runtime.toFixed(3)}ms`;
      this.submitDate = new Date(this.submission.submitDate).toLocaleString();
      this.analysisOutput = this.submission.analysisOutput ? {
        bestGuessFunction: this.mapAnalysisFunctionToViewObject(this.submission.analysisOutput.best_guess_function),
        minimumErrorFunction: this.mapAnalysisFunctionToViewObject(this.submission.analysisOutput.minimum_error_function),
        equivalentFunctions: this.submission.analysisOutput.equivalent_functions.map(this.mapAnalysisFunctionToViewObject),
      } : null;
      this.analysisStatus = ProblemSubmissionAnalysisStatusHelper.getStatusNameByEnumValue(this.submission.analysisStatus);
      this.analysisStatusColor = ProblemSubmissionAnalysisStatusHelper.getStatusColorByEnumValue(this.submission.analysisStatus);

      this.correctnessStatus = ProblemSubmissionCorrectnessStatusHelper.getStatusNameByEnumValue(this.submission.correctnessStatus);
      this.correctnessStatusColor = ProblemSubmissionCorrectnessStatusHelper.getStatusColorByEnumValue(this.submission.correctnessStatus);
    })
  }
}
