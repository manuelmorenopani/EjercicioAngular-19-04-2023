import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2InicioComponent } from './componente2-inicio.component';

describe('Componente2InicioComponent', () => {
  let component: Componente2InicioComponent;
  let fixture: ComponentFixture<Componente2InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2InicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
