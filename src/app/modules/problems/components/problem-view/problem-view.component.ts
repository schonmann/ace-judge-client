import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemService } from 'src/app/modules/api/problem.service';
import { Problem } from 'src/app/shared/models/problem';

@Component({
  selector: 'app-problem-view',
  templateUrl: './problem-view.component.html',
  styleUrls: ['./problem-view.component.scss']
})
export class ProblemViewComponent implements OnInit {

  public problem? : Problem;

  constructor(private problemService : ProblemService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      let id = params['id']

      if(!id) {
        return id
      }

      this.problemService.getById(id).subscribe((res : Problem) => {
        this.problem = res
      });
    })
  }

}
