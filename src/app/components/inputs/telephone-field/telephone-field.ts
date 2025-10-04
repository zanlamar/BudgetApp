import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, ReactiveFormsModule} from '@angular/forms';


/** @title Simple form field */
@Component({
  selector: 'app-telephone-field',
  templateUrl: 'telephone-field.html',
  styleUrl: 'telephone-field.scss',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TelephoneField {

  @Input() phoneCheck!: FormControl;

  errorMessage = signal('');

    updateErrorMessage() {
    if (this.phoneCheck.hasError('required')) {
      this.errorMessage.set("Don't leave it empty!");
    } else if (this.phoneCheck.hasError('minlength')) {
      this.errorMessage.set('Your phone number is too short');
    } else if (this.phoneCheck.hasError('maxlength')) {
      this.errorMessage.set('Your phone number is too long!');
    } else {
      this.errorMessage.set('');
    }
  }
}