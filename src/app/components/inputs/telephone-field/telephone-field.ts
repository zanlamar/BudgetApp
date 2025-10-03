import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


/** @title Simple form field */
@Component({
  selector: 'app-telephone-field',
  templateUrl: 'telephone-field.html',
  styleUrl: 'telephone-field.scss',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TelephoneField {
  readonly phone = new FormControl('', [
    Validators.required, 
    Validators.pattern('^[0-9]*$'),
    Validators.minLength(9),
    Validators.maxLength(15),
  ]);

  errorMessage = signal('');

  constructor() {
    merge(this.phone.statusChanges, this.phone.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

    updateErrorMessage() {
    if (this.phone.hasError('required')) {
      this.errorMessage.set("Don't leave it empty!");
    } else if (this.phone.hasError('minLength')) {
      this.errorMessage.set('Your phone number is too short');
    } else if (this.phone.hasError('maxLength')) {
      this.errorMessage.set('Your phone number is too long!');
    } else {
      this.errorMessage.set('');
    }
  }
}