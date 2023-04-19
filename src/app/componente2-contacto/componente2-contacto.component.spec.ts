import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2ContactoComponent } from './componente2-contacto.component';

describe('Componente2ContactoComponent', () => {
  let component: Componente2ContactoComponent;
  let fixture: ComponentFixture<Componente2ContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2ContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
