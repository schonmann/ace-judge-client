import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLoseChangesDialogComponent } from './confirm-lose-changes-dialog.component';

describe('ConfirmLoseChangesDialogComponent', () => {
  let component: ConfirmLoseChangesDialogComponent;
  let fixture: ComponentFixture<ConfirmLoseChangesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmLoseChangesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmLoseChangesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
