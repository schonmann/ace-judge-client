import { Component, Input } from '@angular/core';
import { ProblemService } from 'src/app/modules/api/problem.service';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';
import { ProblemDifficultyHelper } from 'src/app/shared/helper/problem-difficulty-helper';
import { Router, ActivatedRoute } from '@angular/router';
import { ProblemVisibilityEnum } from 'src/app/shared/enum/problem-visibility-enum';
import { ProblemSimulationStatusEnum } from 'src/app/shared/enum/problem-simulation-status-enum';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent {

  @Input() contest : any;

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
  }, {
    label: "Resolvido",
    field: "solved",
  }];

  constructor(private problemService : ProblemService, private router : Router, private route : ActivatedRoute) { }

  retrievePage(page : number, size : number) : Promise<any> {
    let p = this.contest ? this.problemService.findByContest(page, size, this.contest.id)
     : this.problemService.findByFilter(page, size, {
      id: null,
      name: null,
      category: null,
      difficulty: null,
      visibility: ProblemVisibilityEnum.PUBLIC,
      simulationStatus: ProblemSimulationStatusEnum.READY,
    });
    return p.then((page: any) => {

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
            solved: p.solved ? `<a><i style="color:green" class='material-icons'>done</i></a>` : ``,
          }
        }),
        total: page.totalElements,
      }
    });
  };

  clickItem(item : any) {
    this.router.navigate([this.contest ? 'problem' : 'view', item.id], { relativeTo: this.route })
  }
}
