import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroAdminComponent } from './financeiro-admin.component';

describe('FinanceiroAdminComponent', () => {
  let component: FinanceiroAdminComponent;
  let fixture: ComponentFixture<FinanceiroAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceiroAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
