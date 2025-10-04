import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
// import { FormFieldErrorExample } from '../inputs/email-field/email-field';
import { NameField } from '../inputs/name-field/name-field';
import { TelephoneField } from "../inputs/telephone-field/telephone-field";
import { EmailField } from '../inputs/email-field/email-field';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, CommonModule, NameField, TelephoneField, EmailField],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  standalone: true,
})
export class ContactForm {
  private fb = inject(FormBuilder);

  contactForm: FormGroup;
  errorMessage = signal('');

  constructor() {
    this.contactForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userTelephone: ['', Validators.required]
    });
  }

  get userEmailControl(): FormControl {
   return this.contactForm.get('userEmail') as FormControl;
  }

  updateName() {
    this.contactForm.get('userName')?.setValue('Ana');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.warn(this.contactForm.value);
    };
  }

  updateErrorMessage() {
    if (this.userEmailControl.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.userEmailControl.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }





}
