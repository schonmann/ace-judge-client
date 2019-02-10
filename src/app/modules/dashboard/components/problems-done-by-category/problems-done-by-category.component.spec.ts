import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsDoneByCategoryComponent } from './problems-done-by-category.component';

describe('ProblemsDoneByCategoryComponent', () => {
  let component: ProblemsDoneByCategoryComponent;
  let fixture: ComponentFixture<ProblemsDoneByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsDoneByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsDoneByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
