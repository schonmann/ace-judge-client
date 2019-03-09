import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemCrudComponent } from './problem-crud.component';

describe('ProblemCrudComponent', () => {
  let component: ProblemCrudComponent;
  let fixture: ComponentFixture<ProblemCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
