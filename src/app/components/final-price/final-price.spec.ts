import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPrice } from './final-price';

describe('FinalPrice', () => {
  let component: FinalPrice;
  let fixture: ComponentFixture<FinalPrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalPrice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalPrice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
