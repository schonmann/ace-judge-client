import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisOutputDialogComponent } from './analysis-output-dialog.component';

describe('AnalysisOutputDialogComponent', () => {
  let component: AnalysisOutputDialogComponent;
  let fixture: ComponentFixture<AnalysisOutputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisOutputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisOutputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
