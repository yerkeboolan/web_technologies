import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCommentListComponent } from './trainer-comment-list.component';

describe('TrainerCommentListComponent', () => {
  let component: TrainerCommentListComponent;
  let fixture: ComponentFixture<TrainerCommentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerCommentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
