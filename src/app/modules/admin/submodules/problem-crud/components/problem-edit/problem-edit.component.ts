import { Component, ViewChild, Input, OnInit } from '@angular/core';
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
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-problem-edit',
  templateUrl: './problem-edit.component.html',
  styleUrls: ['./problem-edit.component.scss']
})
export class ProblemEditComponent implements Changeable, OnInit {

  screenTitle: string = "Adicionar Problema";

  @ViewChild('f') ngForm: NgForm

  loading: boolean = false
  categories: Array<any>
  visibilities: Array<any>
  difficulties: Array<any>

  judgeInput? : File
  judgeOutput? : File
  inputGenerator? : File

  public Editor = ClassicEditor

  constructor(private problemService: ProblemService, private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) {

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

  onJudgeInputAdded(file : File) {
    this.judgeInput = file
  }

  onJudgeOutputAdded(file : File) {
    this.judgeOutput = file
  }

  onInputGeneratorAdded(file : File) {
    this.inputGenerator = file
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let id: number = parseInt(params['id'])

      if (!id) {
        return
      }

      this.problemService.getById(id).subscribe((problem: Problem) => {
        this.editProblem(problem)
      }, (err) => {
        this.toastrService.error(`Erro ao buscar problema de id '${id}': ${err}`)
        this.router.navigate(['../'], { relativeTo: this.route })
      })
    })
  }

  editProblem(problem : Problem) {
    this.screenTitle = `Editando #${problem.id}`
    for (var field in problem) {
      let formField = this.ngForm.controls[field]
      if (formField) {
        formField.setValue(problem[field])
      }
    }
  }

  saveProblem(f : NgForm) {

    let form = f.form
    if (form.invalid) {
      return
    }

    let fv = form.value

    if(!fv.id && (!this.judgeInput || !this.judgeOutput)) {
      this.toastrService.warning('Selecionar arquivos de entrada/saída!')
      return
    }

    let problem: Problem = {
      id: fv.id,
      name: fv.name,
      complexities: fv.complexities,
      score: fv.score,
      category: fv.category,
      constraintDescription: fv.constraintDescription,
      difficulty: fv.difficulty,
      exampleInput: fv.exampleInput,
      exampleOutput: fv.exampleOutput,
      problemDescription: fv.problemDescription,
      visibility: fv.visibility,
      judgeInput: this.judgeInput,
      judgeOutput: this.judgeOutput,
      inputGenerator: this.inputGenerator,
    }

    this.loading = true

    this.problemService.save(problem).subscribe(() => {
      this.loading = false
      this.toastrService.success('Problema salvo com sucesso!')
      // clear form
      let id = this.ngForm.form.value.id
      this.ngForm.resetForm()
      this.ngForm.form.value.id = id
      this.ngForm.form.value.problemDescription = ""
      this.ngForm.form.value.constraintDescription = ""
      this.ngForm.form.value.exampleInput = ""
      this.ngForm.form.value.exampleOutput = ""
      // navigate back
      this.router.navigate(['../'], { relativeTo: this.route })
    }, (err) => {
      this.loading = false
      this.toastrService.error('Erro ao salvar problema')
    })
  }

  deleteProblem(p: any) {
  }

  hasChanges(): boolean {
    for (var i in this.ngForm.form.value) {
      if (i === 'id') {
        continue;
      }
      if (this.ngForm.form.value[i]) {
        return true;
      }
    }
    return false;
  }
}
