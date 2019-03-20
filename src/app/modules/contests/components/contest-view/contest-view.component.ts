import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContestService } from 'src/app/modules/api/contest.service';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ProblemService } from 'src/app/modules/api/problem.service';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';
import { ProblemDifficultyHelper } from 'src/app/shared/helper/problem-difficulty-helper';

@Component({
  selector: 'app-contest-view',
  templateUrl: './contest-view.component.html',
  styleUrls: ['./contest-view.component.scss']
})
export class ContestViewComponent implements OnInit {

  contest : any = null;

  tableColumns: TableColumn[] = [{
    label: "#",
    field: "id"
  }, {
    label: "Nome",
    field: "name",
  }, {
    label: "Categoria",
    field: "category"
  }, {
    label: "Dificuldade",
    field: "difficulty",
  }];

  constructor(private router : Router, private route : ActivatedRoute, private toastrService : ToastrService, private problemService : ProblemService, private contestService : ContestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      let id = params['contestId']

      if(!id) {
        return id
      }
      
      this.contestService.getByIdIfAuthorized(id).subscribe((res : any) => { //TODO: any => Contest
        this.contest = res
      }, (error) => {
        this.toastrService.error('Você ainda não participa dessa competição!')
      })
    })
  }

  retrievePage(page : number, size : number) : Promise<any> {
      
    return this.problemService.findByFilter(page, size, {
      id: null,
      name: null,
      category: null,
      difficulty: null,
    }).then((page: any) => {

      return {
        items: page.content.map((p) => {

          let categoryName = ProblemCategoryHelper.getStatusNameByEnumValue(p.category)
          let categoryColor = ProblemCategoryHelper.getStatusColorByEnumValue(p.category)

          let difficultyName = ProblemDifficultyHelper.getStatusNameByEnumValue(p.difficulty)
          let difficultyColor = ProblemDifficultyHelper.getStatusColorByEnumValue(p.difficulty)

          return {
            id: p.id,
            name: p.name,
            category: `<span style="color:${categoryColor}">${categoryName}</span>`,
            difficulty: `<span style="color:${difficultyColor}">${difficultyName}</span>`,
            original: p,
          }
        }),
      }
    });
  };

  clickItem(item : any) {
    this.router.navigate(['problem', item.id], { relativeTo: this.route })
  }
}
