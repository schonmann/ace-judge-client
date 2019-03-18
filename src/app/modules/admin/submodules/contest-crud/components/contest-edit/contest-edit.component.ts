import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { ContestService } from 'src/app/modules/api/contest.service';
import { DateHelper } from 'src/app/shared/helper/date-helper';
import { ProblemService } from 'src/app/modules/api/problem.service';

@Component({
  selector: 'app-contest-edit',
  templateUrl: './contest-edit.component.html',
  styleUrls: ['./contest-edit.component.scss']
})
export class ContestEditComponent implements OnInit {

  screenTitle: string = "Adicionar Competição";

  @ViewChild('f') ngForm: NgForm
  loading: boolean = false
  searchCtrl = new FormControl();
  filteredProblems: Observable<any[]>;
  problems: Observable<any[]>

  public Editor = ClassicEditor

  constructor(private contestService: ContestService, private problemService : ProblemService, private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      let id: number = parseInt(params['id'])
      if (!id) {
        return
      }
      this.contestService.getById(id).subscribe((contest: any) => { //TODO: any => Contest
        this.editContest(contest)
      }, (err) => {
        this.toastrService.error(`Erro ao buscar problema de id '${id}': ${err}`)
        this.router.navigate(['../'], { relativeTo: this.route })
      })
    })

    this.filteredProblems = this.searchCtrl.valueChanges
      .startWith(null)
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(nameQuery => {
        return this.problemService.getByNameContaining(0, 10, nameQuery)
      })
  }

  editContest(contest: any) { //TODO: any => Contest

    this.screenTitle = `Editando #${contest.id}`

    // precisa remover horas da data.

    contest.startDate = DateHelper.dateWithoutTime(contest.startDate)
    contest.endDate = DateHelper.dateWithoutTime(contest.endDate)

    // preenche form.

    for (var field in contest) {
      let formField = this.ngForm.controls[field]
      if (formField) {
        formField.setValue(contest[field])
      }
    }
  }

  saveContest(f: NgForm) {

    let form = f.form

    if (form.invalid) {
      return
    }

    let fv = form.value

    let startDateTime = DateHelper.mergeDateHour(fv.startDate, fv.startTime)
    let endDateTime = DateHelper.mergeDateHour(fv.endDate, fv.endTime)

    if (startDateTime.getTime() > endDateTime.getTime()) {
      this.toastrService.warning("A data/hora fim deve ser futura à data/hora início!")
      return;
    }

    let contest: any = {
      id: fv.id,
      name: fv.name,
      password: fv.password,
      description: fv.description,
      startDate: fv.startDate,
      startTime: fv.startTime,
      endDate: fv.endDate,
      endTime: fv.endTime,
    }

    this.loading = true

    this.contestService.save(contest).subscribe(() => {
      this.loading = false
      this.toastrService.success('Competição salva com sucesso!')
      // clear form
      let id = this.ngForm.form.value.id
      this.ngForm.resetForm()
      this.ngForm.form.value.id = id
      this.ngForm.form.value.description = ""
      // navigate back
      this.router.navigate(['../'], { relativeTo: this.route })
    }, (err) => {
      this.loading = false
      this.toastrService.error('Erro ao salvar competição')
    })
  }

  deleteContest(p: any) {
  }

  hasChanges(): boolean {
    for (var i in this.ngForm.form.value) {
      if (i === 'id') {
        continue;
      }
      if (this.ngForm.form.value[i]) {
        return true;
      }
    }
    return false;
  }
}
