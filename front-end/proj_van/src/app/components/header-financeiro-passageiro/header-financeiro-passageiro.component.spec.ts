import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFinanceiroPassageiroComponent } from './header-financeiro-passageiro.component';

describe('HeaderFinanceiroPassageiroComponent', () => {
  let component: HeaderFinanceiroPassageiroComponent;
  let fixture: ComponentFixture<HeaderFinanceiroPassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFinanceiroPassageiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFinanceiroPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
