import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestCrudComponent } from './contest-crud.component';

describe('ContestCrudComponent', () => {
  let component: ContestCrudComponent;
  let fixture: ComponentFixture<ContestCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
