import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ProblemCategoryEnum } from 'src/app/shared/enum/problem-category-enum';
import { ProblemDifficultyEnum } from 'src/app/shared/enum/problem-difficulty-enum';
import { ProblemVisibilityEnum } from 'src/app/shared/enum/problem-visibility-enum';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';
import { ProblemVisibilityHelper } from 'src/app/shared/helper/problem-visibility-helper';
import { Changeable } from 'src/app/shared/interface/changeable';
import { ProblemDifficultyHelper } from 'src/app/shared/helper/problem-difficulty-helper';

@Component({
  selector: 'app-problem-crud',
  templateUrl: './problem-crud.component.html',
  styleUrls: ['./problem-crud.component.scss']
})
export class ProblemCrudComponent implements Changeable {

  @ViewChild('f') private ngForm: NgForm;

  private loading: boolean = false;
  private categories: Array<any>;
  private visibilities: Array<any>;
  private difficulties: Array<any>;

  public Editor = ClassicEditor;

  constructor() {
    this.categories = Object.keys(ProblemCategoryEnum).map(key => {
      return {
        name: ProblemCategoryHelper.getStatusNameByEnumValue(key),
        value: key,
      }
    });
    this.visibilities = Object.keys(ProblemVisibilityEnum).map(key => {
      return {
        name: ProblemVisibilityHelper.getStatusNameByEnumValue(key),
        value: key,
      }
    });
    this.difficulties = Object.keys(ProblemDifficultyEnum).map(key => {
      return {
        name: ProblemDifficultyHelper.getStatusNameByEnumValue(key),
        value: key,
      }
    });
  }

  saveProblem() {
    console.log(this.ngForm);
    if (this.ngForm.form.invalid) {
      return;
    }
  }

  clearForm() {
    this.ngForm.resetForm();
    this.ngForm.form.value.problemDescription = "";
    this.ngForm.form.value.constraintDescription = "";
    this.ngForm.form.value.exampleInput = "";
    this.ngForm.form.value.exampleOutput = "";
  }

  hasChanges(): boolean {
    for(var i in this.ngForm.form.value) {
      if(this.ngForm.form.value[i]) {
        return true;
      }
    }
    return false;
  }
}
