import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMotoristaComponent } from './formulario-motorista.component';

describe('FormularioMotoristaComponent', () => {
  let component: FormularioMotoristaComponent;
  let fixture: ComponentFixture<FormularioMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
