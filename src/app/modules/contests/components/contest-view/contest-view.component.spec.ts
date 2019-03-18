import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestViewComponent } from './contest-view.component';

describe('ContestViewComponent', () => {
  let component: ContestViewComponent;
  let fixture: ComponentFixture<ContestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
