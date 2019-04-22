import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListDetailComponent } from './task-list-detail.component';

describe('TaskListDetailComponent', () => {
  let component: TaskListDetailComponent;
  let fixture: ComponentFixture<TaskListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
