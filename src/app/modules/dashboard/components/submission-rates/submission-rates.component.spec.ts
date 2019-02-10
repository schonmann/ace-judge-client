import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionRatesComponent } from './submission-rates.component';

describe('SubmissionRatesComponent', () => {
  let component: SubmissionRatesComponent;
  let fixture: ComponentFixture<SubmissionRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
