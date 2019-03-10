import { Component } from '@angular/core';
import { ProblemService } from 'src/app/modules/api/problem.service';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';
import { ProblemDifficultyHelper } from 'src/app/shared/helper/problem-difficulty-helper';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent {

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

  constructor(private problemService : ProblemService) { }

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
          }
        }),
        total: page.totalElements,
      }
    });
  };
}
