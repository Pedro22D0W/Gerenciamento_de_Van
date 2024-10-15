import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPrimarioComponent } from './botao-primario.component';

describe('BotaoPrimarioComponent', () => {
  let component: BotaoPrimarioComponent;
  let fixture: ComponentFixture<BotaoPrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoPrimarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
