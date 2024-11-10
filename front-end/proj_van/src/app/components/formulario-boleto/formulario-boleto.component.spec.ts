import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBoletoComponent } from './formulario-boleto.component';

describe('FormularioBoletoComponent', () => {
  let component: FormularioBoletoComponent;
  let fixture: ComponentFixture<FormularioBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBoletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
