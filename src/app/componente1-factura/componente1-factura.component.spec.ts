import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1FacturaComponent } from './componente1-factura.component';

describe('Componente1FacturaComponent', () => {
  let component: Componente1FacturaComponent;
  let fixture: ComponentFixture<Componente1FacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1FacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1FacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
