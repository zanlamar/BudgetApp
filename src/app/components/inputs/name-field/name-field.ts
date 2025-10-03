import {ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {merge} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';


/** @title Form field with error messages */

@Component({
  selector: 'app-name-field',
  templateUrl: 'name-field.html',
  styleUrl: 'name-field.scss',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NameField {
  readonly name = new FormControl('', [
    Validators.required, 
    Validators.minLength(2),
    Validators.pattern('^[a-zA-Z ]+$')
  ]);
  errorMessage = signal('');

  constructor() {
    merge(this.name.statusChanges, this.name.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.name.hasError('required')) {
      this.errorMessage.set("Don't leave it empty!");
    } else if (this.name.hasError('minlength')) {
      this.errorMessage.set('Name must be at least 2 characters');
    } else if (this.name.hasError('pattern')) {
      this.errorMessage.set('Only letters and spaces are allowed');
    } else {
      this.errorMessage.set('');
    }
  }
}
