import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContestService } from 'src/app/modules/api/contest.service';
import { TableColumn } from 'src/app/shared/modules/table/models/table-column';

@Component({
  selector: 'app-contest-view',
  templateUrl: './contest-view.component.html',
  styleUrls: ['./contest-view.component.scss']
})
export class ContestViewComponent implements OnInit {

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

  contest : any = null;

  constructor(private route : ActivatedRoute, private toastrService : ToastrService, private contestService : ContestService) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {

      let id = params['id']

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
}
