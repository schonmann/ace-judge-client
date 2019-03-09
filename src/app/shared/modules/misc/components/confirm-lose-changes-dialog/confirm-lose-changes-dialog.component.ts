import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-lose-changes-dialog',
  templateUrl: './confirm-lose-changes-dialog.component.html',
  styleUrls: ['./confirm-lose-changes-dialog.component.scss']
})
export class ConfirmLoseChangesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmLoseChangesDialogComponent>) { }
  ngOnInit() {
  }
}
