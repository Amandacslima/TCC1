import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trilhas } from './trilhas';

describe('Trilhas', () => {
  let component: Trilhas;
  let fixture: ComponentFixture<Trilhas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trilhas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trilhas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
