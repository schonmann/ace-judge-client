import { Component, OnInit } from '@angular/core';
import { ProblemSubmissionService } from 'src/app/modules/api/problem-submission.service';
import { ProblemCategoryHelper } from 'src/app/shared/helper/problem-category-helper';

@Component({
  selector: 'app-problems-done-by-category',
  templateUrl: './problems-done-by-category.component.html',
  styleUrls: ['./problems-done-by-category.component.scss']
})
export class ProblemsDoneByCategoryComponent implements OnInit {

  single = [];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Categoria';
  showYAxisLabel = true;
  yAxisLabel = 'Problemas Resolvidos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private problemSubmissionService : ProblemSubmissionService) {
    Object.assign(this, { single: this.single })
  }

  ngOnInit(): void {
    this.problemSubmissionService.getSubmissionStatistics().subscribe((res : any) => {
      let solvedByCategory = res.numberSolvedByCategory;
      let solvedByCategoryArray = Object.keys(solvedByCategory).map(k => {
        return { name: ProblemCategoryHelper.getStatusNameByEnumValue(k), value: solvedByCategory[k] }
      });
      this.single = [...solvedByCategoryArray];
    });
  }

  onSelect(event) {
    console.log(event);
  }
}
