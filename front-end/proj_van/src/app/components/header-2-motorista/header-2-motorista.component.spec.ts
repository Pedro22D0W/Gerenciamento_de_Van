import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2MotoristaComponent } from './header-2-motorista.component';

describe('Header2MotoristaComponent', () => {
  let component: Header2MotoristaComponent;
  let fixture: ComponentFixture<Header2MotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header2MotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header2MotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
