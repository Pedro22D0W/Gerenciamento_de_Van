import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMotoristaComponent } from './cadastro-motorista.component';

describe('CadastroMotoristaComponent', () => {
  let component: CadastroMotoristaComponent;
  let fixture: ComponentFixture<CadastroMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
