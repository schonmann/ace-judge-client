import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { TableColumn } from '../../../table/models/table-column';
import { isFunction } from 'util';


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
  @Input() click: any;

  page : number;
  pageSize : number = 10;
  total : number;
  items: Array<any[]>;
  loading: boolean;
  displayColumms: string[];
  
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

  //helper method.
  isFunction(x : any) {
    return typeof x === "function";
  }

  onClick(x : any) {
    if(!this.isFunction(this.click)) {
      return
    }
    this.click(x);
  }

  ngOnInit() {
    this.displayColumms = this.columns.map(x=>x.label);
    this.getPage({pageIndex: 0, pageSize: 10});
  }
}
