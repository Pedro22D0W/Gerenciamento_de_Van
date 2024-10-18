import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPassageiroComponent } from './dashboard-passageiro.component';

describe('DashboardPassageiroComponent', () => {
  let component: DashboardPassageiroComponent;
  let fixture: ComponentFixture<DashboardPassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPassageiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
