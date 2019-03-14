import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProblemsDoneComponent } from './problems-done.component';

describe('ProblemsDoneComponent', () => {
  let component: ProblemsDoneComponent;
  let fixture: ComponentFixture<ProblemsDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
