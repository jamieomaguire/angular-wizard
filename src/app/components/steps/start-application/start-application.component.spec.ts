import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartApplicationComponent } from './start-application.component';

describe('StartApplicationComponent', () => {
  let component: StartApplicationComponent;
  let fixture: ComponentFixture<StartApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
