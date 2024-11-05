import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroAdminPassageiroComponent } from './financeiro-admin-passageiro.component';

describe('FinanceiroAdminPassageiroComponent', () => {
  let component: FinanceiroAdminPassageiroComponent;
  let fixture: ComponentFixture<FinanceiroAdminPassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceiroAdminPassageiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroAdminPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
