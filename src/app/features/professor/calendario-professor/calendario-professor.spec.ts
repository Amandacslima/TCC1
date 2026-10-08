import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioProfessor } from './calendario-professor';

describe('CalendarioProfessor', () => {
  let component: CalendarioProfessor;
  let fixture: ComponentFixture<CalendarioProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioProfessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
