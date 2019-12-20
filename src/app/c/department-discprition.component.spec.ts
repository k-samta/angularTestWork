import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDiscpritionComponent } from './department-discprition.component';

describe('DepartmentDiscpritionComponent', () => {
  let component: DepartmentDiscpritionComponent;
  let fixture: ComponentFixture<DepartmentDiscpritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDiscpritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDiscpritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
