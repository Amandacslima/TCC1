import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAluno } from './calendario-aluno';

describe('CalendarioAluno', () => {
  let component: CalendarioAluno;
  let fixture: ComponentFixture<CalendarioAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioAluno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioAluno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
