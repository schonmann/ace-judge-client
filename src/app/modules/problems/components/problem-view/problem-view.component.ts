import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemService } from 'src/app/modules/api/problem.service';
import { Problem } from 'src/app/shared/models/problem';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-problem-view',
  templateUrl: './problem-view.component.html',
  styleUrls: ['./problem-view.component.scss']
})
export class ProblemViewComponent implements OnInit {

  public problem? : Problem
  private solutionProgram? : File

  loading: boolean = false

  constructor(private problemService : ProblemService, private problemSubmissionService : ProblemSubmissionService, private router : Router, private route : ActivatedRoute, private toastrService : ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      let id = params['id']

      if(!id) {
        return id
      }

      this.problemService.getById(id).subscribe((res : Problem) => {
        this.problem = res
      })
    })
  }

  onSolutionProgramAdded(event) {
    let files = event.srcElement.files
    console.log(files)
    if(files.length > 0) {
      this.solutionProgram = files[0]
    }
  }

  submitProblem() {
    this.loading = true
    this.problemSubmissionService.submitSolution(this.problem.id, this.solutionProgram).subscribe(res => {
      this.toastrService.success('Submissão enviada com sucesso! Problema na fila...')
    }, err => {
      this.toastrService.error('Erro ao submeter problema! ' + err);
    })
    .add(() => {
      this.loading = false;
      this.solutionProgram = null;
    }).unsubscribe();
  }

}
