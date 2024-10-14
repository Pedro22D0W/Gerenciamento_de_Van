import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPassageiroComponent } from './formulario-passageiro.component';

describe('FormularioPassageiroComponent', () => {
  let component: FormularioPassageiroComponent;
  let fixture: ComponentFixture<FormularioPassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPassageiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
