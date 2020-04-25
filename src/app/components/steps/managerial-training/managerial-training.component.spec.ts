import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerialTrainingComponent } from './managerial-training.component';

describe('ManagerialTrainingComponent', () => {
  let component: ManagerialTrainingComponent;
  let fixture: ComponentFixture<ManagerialTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerialTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerialTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
