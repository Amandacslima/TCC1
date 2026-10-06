import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarTurmas } from './gerenciar-turmas';

describe('GerenciarTurmas', () => {
  let component: GerenciarTurmas;
  let fixture: ComponentFixture<GerenciarTurmas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarTurmas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarTurmas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
