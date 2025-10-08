import {ChangeDetectionStrategy, Component, signal, Input} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

/** @title Form field with error messages */

@Component({
  selector: 'app-name-field',
  templateUrl: 'name-field.html',
  styleUrl: 'name-field.scss',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NameField {

  @Input() userNameCheck!: FormControl;

  errorMessage = signal('');

  updateErrorMessage() {
    if (this.userNameCheck.hasError('required')) {
      this.errorMessage.set("Don't leave it empty!");
    } else if (this.userNameCheck.hasError('minlength')) {
      this.errorMessage.set('Name must be at least 2 characters');
    } else if (this.userNameCheck.hasError('pattern')) {
      this.errorMessage.set('Only letters and spaces are allowed');
    } else {
      this.errorMessage.set('');
    }
  }
}
