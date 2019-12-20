import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EymployeeListComponent } from './eymployee-list.component';

describe('EymployeeListComponent', () => {
  let component: EymployeeListComponent;
  let fixture: ComponentFixture<EymployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EymployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EymployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
