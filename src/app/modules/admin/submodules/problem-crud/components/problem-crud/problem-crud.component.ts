import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Changeable } from 'src/app/shared/interface/changeable';

@Component({
  selector: 'app-problem-crud',
  templateUrl: './problem-crud.component.html',
  styleUrls: ['./problem-crud.component.scss']
})
export class ProblemCrudComponent implements OnInit, Changeable {

  private loading : boolean = false;
  

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

  saveProblem(f: NgForm) {
    if (f.invalid) {
      return;
    }
  }

  clearForm(f: NgForm) {
    f.reset();
  }

  hasChanges(): boolean {
    return true;
  }
}
