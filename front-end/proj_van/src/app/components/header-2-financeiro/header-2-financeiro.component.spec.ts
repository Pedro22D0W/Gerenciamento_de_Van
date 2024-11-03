import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2FinanceiroComponent } from './header-2-financeiro.component';

describe('Header2FinanceiroComponent', () => {
  let component: Header2FinanceiroComponent;
  let fixture: ComponentFixture<Header2FinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header2FinanceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header2FinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
