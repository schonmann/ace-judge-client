import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemService } from 'src/app/modules/api/problem.service';
import { Problem } from 'src/app/shared/models/problem';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { ToastrService } from 'ngx-toastr';
import { LanguageEnum } from 'src/app/shared/enum/language-enum';
import { LanguageHelper } from 'src/app/shared/helper/language-helper';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-problem-view',
  templateUrl: './problem-view.component.html',
  styleUrls: ['./problem-view.component.scss']
})
export class ProblemViewComponent implements OnInit {

  problem? : Problem
  solutionProgram? : File
  contestId?: number
  language: string

  loading: boolean = false
  languages: Array<any> = []

  constructor(private problemService : ProblemService, private problemSubmissionService : ProblemSubmissionService, private router : Router, private route : ActivatedRoute, private toastrService : ToastrService) { }

  ngOnInit() {

    this.languages = Object.keys(LanguageEnum).map(key => {
      return {
        name: LanguageHelper.getStatusNameByEnumValue(key),
        value: key,
      }
    })

    console.log(this.route)
    this.route.params.subscribe(params => {

      let id = params['problemId']

      if(!id) {
        return id
      }

      this.contestId = params['contestId']

      this.problemService.getById(id).subscribe((res : Problem) => {
        this.problem = res
      })
    })
  }

  onSolutionProgramAdded(event) {
    let files = event.srcElement.files
    if(files.length > 0) {
      this.solutionProgram = files[0]
    }
  }

  submitProblem(f : NgForm) {
    this.loading = true
    this.problemSubmissionService.submitSolution(this.problem.id, this.solutionProgram, this.language, this.contestId).subscribe(res => {
      this.toastrService.success('Submissão enviada com sucesso! Problema na fila...')
    }, err => {
      this.toastrService.error('Erro ao submeter problema! ' + err);
    })
    .add(() => {
      this.loading = false;
      this.solutionProgram = null;
      f.resetForm();
    }).unsubscribe();
  }

}
