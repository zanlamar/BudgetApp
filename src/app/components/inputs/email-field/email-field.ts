import {ChangeDetectionStrategy, Component, signal, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

/** @title Form field with error messages */
@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.html',
  styleUrl: './email-field.scss',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmailField {

  @Input() emailCheck!: FormControl;

  errorMessage = signal('');

  updateErrorMessage() {
    if (this.emailCheck.hasError('required')) {
      this.errorMessage.set("Don't leave it empty!");
    } else if (this.emailCheck.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}
