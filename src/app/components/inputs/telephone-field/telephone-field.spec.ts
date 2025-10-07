import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneField } from './telephone-field';

describe('TelephoneField', () => {
  let component: TelephoneField;
  let fixture: ComponentFixture<TelephoneField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelephoneField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
