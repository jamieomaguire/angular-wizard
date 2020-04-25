import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalStatementComponent } from './personal-statement.component';

describe('PersonalStatementComponent', () => {
  let component: PersonalStatementComponent;
  let fixture: ComponentFixture<PersonalStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
