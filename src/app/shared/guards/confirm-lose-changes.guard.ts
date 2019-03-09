import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Changeable } from 'src/app/shared/interface/changeable';
import { MatDialog } from '@angular/material';
import { ConfirmLoseChangesDialogComponent } from '../modules/misc/components/confirm-lose-changes-dialog/confirm-lose-changes-dialog.component';

@Injectable()
export class ConfirmLoseChangesGuard implements CanDeactivate<Changeable> {

  constructor(private dialog : MatDialog) { }

  canDeactivate(changeable: Changeable, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(changeable.hasChanges()) {
      return this.dialog.open(ConfirmLoseChangesDialogComponent).afterClosed();
    }
    return true;
  }
}
