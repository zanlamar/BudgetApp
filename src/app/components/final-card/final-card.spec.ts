import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCard } from './final-card';

describe('FinalCard', () => {
  let component: FinalCard;
  let fixture: ComponentFixture<FinalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
