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
import { ProblemService } from 'src/app/modules/api/problem.service';
import { Problem } from 'src/app/shared/models/problem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-problem-edit',
  templateUrl: './problem-edit.component.html',
  styleUrls: ['./problem-edit.component.scss']
})
export class ProblemEditComponent implements Changeable {

  @ViewChild('f') private ngForm: NgForm;

  private loading: boolean = false;
  private categories: Array<any>;
  private visibilities: Array<any>;
  private difficulties: Array<any>;

  public Editor = ClassicEditor;

  constructor(private problemService : ProblemService, private toastrService : ToastrService) {
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

    let form = this.ngForm.form;

    if (form.invalid) {
      return;
    }

    let fv = form.value;

    let problem : Problem = {
      name: fv.name,
      acceptedComplexities: fv.acceptedComplexities,
      category: fv.category,
      constraintDescription: fv.constraintDescription,
      difficulty: fv.difficulty,
      exampleInput: fv.exampleInput,
      exampleOutput: fv.exampleOutput,
      id: fv.id,
      problemDescription: fv.problemDescription,
      visibility: fv.visibility
    };

    this.problemService.save(problem).subscribe(res => {
      this.toastrService.success('Problema salvo com sucesso!');
    }, (err) => {
      this.toastrService.error('Erro ao salvar problema');
    });
  }

  deleteProblem(p : any) {
    
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
