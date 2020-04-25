import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousStepComponent } from './previous-step.component';

describe('PreviousStepComponent', () => {
  let component: PreviousStepComponent;
  let fixture: ComponentFixture<PreviousStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
