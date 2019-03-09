import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ProblemCategoryEnum } from 'src/app/shared/enum/ProblemCategoryEnum';
import { ProblemDifficultyEnum } from 'src/app/shared/enum/ProblemDifficultyEnum';
import { ProblemVisibilityEnum } from 'src/app/shared/enum/ProblemVisibilityEnum';
import { ProblemCategoryHelper } from 'src/app/shared/helper/ProblemCategoryHelper';
import { ProblemVisibilityHelper } from 'src/app/shared/helper/ProblemVisibilityHelper';
import { Changeable } from 'src/app/shared/interface/changeable';
import { ProblemDifficultyHelper } from 'src/app/shared/helper/ProblemDifficultyHelper';

@Component({
  selector: 'app-problem-crud',
  templateUrl: './problem-crud.component.html',
  styleUrls: ['./problem-crud.component.scss']
})
export class ProblemCrudComponent implements Changeable {

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
    })
    this.visibilities = Object.keys(ProblemVisibilityEnum).map(key => {
      return {
        name: ProblemVisibilityHelper.getStatusNameByEnumValue(key),
        value: key,
      }
    })
    this.difficulties = Object.keys(ProblemDifficultyEnum).map(key => {
      return {
        name: ProblemDifficultyHelper.getStatusNameByEnumValue(key),
        value: key,
      }
    })
  }

  saveProblem(f: NgForm) {
    console.log(f.form);
    if (f.invalid) {
      return;
    }
  }

  clearForm(f: NgForm) {
    f.reset();
  }

  hasChanges(): boolean {
    return true;
  }
}
