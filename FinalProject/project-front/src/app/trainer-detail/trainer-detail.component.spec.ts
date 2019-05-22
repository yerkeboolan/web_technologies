import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDetailComponent } from './trainer-detail.component';

describe('TrainerDetailComponent', () => {
  let component: TrainerDetailComponent;
  let fixture: ComponentFixture<TrainerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
