import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBoletoComponent } from './cadastro-boleto.component';

describe('CadastroBoletoComponent', () => {
  let component: CadastroBoletoComponent;
  let fixture: ComponentFixture<CadastroBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroBoletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
