import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMotoristaComponent } from './dashboard-motorista.component';

describe('DashboardMotoristaComponent', () => {
  let component: DashboardMotoristaComponent;
  let fixture: ComponentFixture<DashboardMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
