import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListPipeFiletrComponent } from './emp-list-pipe-filetr.component';

describe('EmpListPipeFiletrComponent', () => {
  let component: EmpListPipeFiletrComponent;
  let fixture: ComponentFixture<EmpListPipeFiletrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListPipeFiletrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListPipeFiletrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
