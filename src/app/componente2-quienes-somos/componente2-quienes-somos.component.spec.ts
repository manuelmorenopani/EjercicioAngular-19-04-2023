import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2QuienesSomosComponent } from './componente2-quienes-somos.component';

describe('Componente2QuienesSomosComponent', () => {
  let component: Componente2QuienesSomosComponent;
  let fixture: ComponentFixture<Componente2QuienesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2QuienesSomosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2QuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
