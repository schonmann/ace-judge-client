import { Component, ViewChild, OnInit } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
import { BigONotationEnum } from 'src/app/shared/enum/big-o-notation-enum';
import { LanguageHelper } from 'src/app/shared/helper/language-helper';
import { LanguageEnum } from 'src/app/shared/enum/language-enum';
import { ProblemSimulationStatusEnum } from 'src/app/shared/enum/problem-simulation-status-enum';
import { MatDialog } from '@angular/material';
import { AnalysisOutputDialogComponent } from './components/analysis-output-dialog/analysis-output-dialog.component';

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
  bigoNotation: Array<any>
  visibilities: Array<any>
  difficulties: Array<any>
  languages: Array<any> = []

  simulationStatus: string
  analysisOutput: any

  judgeInput? : File
  judgeAnswerKeyProgram? : File
  judgeOutput? : File
  inputGenerator? : File

  judgeAnswerKeyProgramLanguage? : string
  inputGeneratorLanguage? : string

  editable : boolean = true;

  public Editor = ClassicEditor

  constructor(private problemService: ProblemService, private toastrService: ToastrService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {

    this.categories = Object.keys(ProblemCategoryEnum).map(key => {
      return {
        name: ProblemCategoryHelper.getStatusNameByEnumValue(key),
        value: key,
      }
    })
    this.bigoNotation = Object.keys(BigONotationEnum).map(key => ({
      name: BigONotationEnum[key],
      value: key,
    }))
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

  openDialog() {
    
    this.dialog.open(AnalysisOutputDialogComponent, {
      data: {
        analysisOutput: this.analysisOutput
      }
    });
  }

  hasFailedSimulation() {
    return this.simulationStatus === ProblemSimulationStatusEnum.WRONG_COMPLEXITY;
  }

  onJudgeInputAdded(file : File) {
    this.judgeInput = file
  }

  onJudgeOutputAdded(file : File) {
    this.judgeOutput = file
  }

  onJudgeAnswerKeyProgramAdded(file : File) {
    this.judgeAnswerKeyProgram = file
  }

  onInputGeneratorAdded(file : File) {
    this.inputGenerator = file
  }

  ngOnInit() {
    this.languages = Object.keys(LanguageEnum).map(key => {
      return {
        name: LanguageHelper.getStatusNameByEnumValue(key),
        value: key,
      }
    })
    this.route.queryParams.subscribe(params => {
      let id: number = parseInt(params['id'])

      if (!id) {
        return
      }

      this.problemService.getById(id).subscribe((problem: Problem) => {
        this.editable = problem.editable;
        this.analysisOutput = problem.analysisOutput;
        this.simulationStatus = problem.simulationStatus;
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

    if(!fv.id && (!this.judgeInput || !this.judgeOutput || !this.judgeAnswerKeyProgram)) {
      this.toastrService.warning('Selecionar arquivos de entrada/saída/programa gabarito!')
      return
    }

    let problem: Problem = {
      id: fv.id,
      name: fv.name,
      complexities: fv.complexities,
      bigoNotation: fv.bigoNotation,
      score: fv.score,
      category: fv.category,
      constraintDescription: fv.constraintDescription,
      difficulty: fv.difficulty,
      exampleInput: fv.exampleInput,
      exampleOutput: fv.exampleOutput,
      problemDescription: fv.problemDescription,
      simulationStatus: fv.simulationStatus,
      visibility: fv.visibility,
      judgeInput: this.judgeInput,
      judgeOutput: this.judgeOutput,
      judgeAnswerKeyProgram: this.judgeAnswerKeyProgram,
      judgeAnswerKeyProgramLanguage: this.judgeAnswerKeyProgramLanguage,
      inputGenerator: this.inputGenerator,
      inputGeneratorLanguage: this.inputGeneratorLanguage,
      editable: fv.id ? this.editable : true,
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
