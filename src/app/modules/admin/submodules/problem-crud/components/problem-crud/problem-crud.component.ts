import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ProblemService } from 'src/app/modules/api/problem.service';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';
import { ProblemDifficultyHelper } from 'src/app/shared/helper/problem-difficulty-helper';
import { ProblemVisibilityHelper } from 'src/app/shared/helper/problem-visibility-helper';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problem-crud',
  templateUrl: './problem-crud.component.html',
  styleUrls: ['./problem-crud.component.scss']
})
export class ProblemCrudComponent {

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
    label: "Visibilidade",
    field: "visibility",
  }];

  constructor(private problemService : ProblemService, private router : Router, private route : ActivatedRoute) { }

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

          let visibilityName = ProblemVisibilityHelper.getStatusNameByEnumValue(p.visibility)

          return {
            id: p.id,
            name: p.name,
            category: `<span style="color:${categoryColor}">${categoryName}</span>`,
            difficulty: `<span style="color:${difficultyColor}">${difficultyName}</span>`,
            visibility: visibilityName,
          }
        }),
        total: page.totalElements,
      }
    });
  };

  clickItem(item : any) {
    this.router.navigate(['edit'], { queryParams: { id: item.id }, relativeTo: this.route})
  }
}
