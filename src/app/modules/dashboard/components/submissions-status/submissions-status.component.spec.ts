import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsStatusComponent } from './submissions-status.component';

describe('SubmissionsStatusComponent', () => {
  let component: SubmissionsStatusComponent;
  let fixture: ComponentFixture<SubmissionsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
