import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-output',
  templateUrl: './analysis-output.component.html',
  styleUrls: ['./analysis-output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalysisOutputComponent implements OnInit {
  @Input() analysisOutput : any;

  private mapAnalysisFunctionToViewObject(fn) : any {
    return {
      expression: fn.expression,
      parameters: fn.parameters,
      error: fn.error.toFixed(3),
      values: fn.values.map(x => x.toFixed(8)).join(', '),
      latexExpression: fn.latex_expression,
      fullExpression: fn.full_expression,
      chosen: fn.chosen,
    };
  }

  constructor() {
  }
  ngOnInit() {
    this.analysisOutput = {
      bestGuessFunction: this.mapAnalysisFunctionToViewObject(this.analysisOutput.best_guess_function),
      minimumErrorFunction: this.mapAnalysisFunctionToViewObject(this.analysisOutput.minimum_error_function),
      equivalentFunctions: this.analysisOutput.equivalent_functions.map(this.mapAnalysisFunctionToViewObject),
    };
  }
}