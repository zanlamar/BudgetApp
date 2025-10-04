import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
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

  constructor() {
    this.contactForm = this.fb.group({
      userName: ['', [ 
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]+$')
      ]],

      userEmail: ['', [
        Validators.required, 
        Validators.email
      ]],

      userTelephone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(9),
        Validators.maxLength(15),
      ]]
    });
  }

  get userNameControl(): FormControl {
    return this.contactForm.get('userName') as FormControl;
  }

  get userEmailControl(): FormControl {
   return this.contactForm.get('userEmail') as FormControl;
  }

  get userTelephoneControl(): FormControl {
    return this.contactForm.get('userTelephone') as FormControl;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.warn(this.contactForm.value);
      console.log(this.contactForm.value);
      alert(`Thank you!! ${this.contactForm.value.userName}!`);
    }
  }
}
