import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemRegisterComponent } from './problem-register.component';

describe('ProblemRegisterComponent', () => {
  let component: ProblemRegisterComponent;
  let fixture: ComponentFixture<ProblemRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
