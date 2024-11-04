import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroPassageiroComponent } from './financeiro-passageiro.component';

describe('FinanceiroPassageiroComponent', () => {
  let component: FinanceiroPassageiroComponent;
  let fixture: ComponentFixture<FinanceiroPassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceiroPassageiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
