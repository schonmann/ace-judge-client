import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-analysis-output-dialog',
  templateUrl: './analysis-output-dialog.component.html',
})
export class AnalysisOutputDialogComponent implements OnInit {
  analysisOutput : any
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.analysisOutput = data.analysisOutput;
  }
  ngOnInit() {
  }
}