import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2PassageiroComponent } from './header-2-passageiro.component';

describe('Header2PassageiroComponent', () => {
  let component: Header2PassageiroComponent;
  let fixture: ComponentFixture<Header2PassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header2PassageiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header2PassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
