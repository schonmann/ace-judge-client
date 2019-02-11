import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { TableColumn } from '../../../table/models/table-column';


@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatedTableComponent implements OnInit {

  @ViewChild('paginator') paginator : MatPaginator;

  @Input() retrievePage : any;
  @Input() columns : TableColumn[];
  @Input('pipes') pipesByField : any = {};

  private page : number;
  private pageSize : number = 10;
  private total : number;
  private items: Array<any[]>;
  private loading: boolean;
  private displayColumms: string[];
  
  pageSizeOptions: number[] = [2, 5, 10, 25, 100];

  constructor() {
  }

  getPage($event) {
    console.log($event)
    this.loading = true;
    this.retrievePage($event.pageIndex, $event.pageSize).then((res) => {
      this.page = $event.pageIndex;
      this.total = res.total;
      this.items = res.items;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.displayColumms = this.columns.map(x=>x.label);
    this.getPage({pageIndex: 0, pageSize: 10});
  }
}
