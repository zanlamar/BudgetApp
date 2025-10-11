import { Component, inject, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NameField } from '../inputs/name-field/name-field';
import { TelephoneField } from "../inputs/telephone-field/telephone-field";
import { EmailField } from '../inputs/email-field/email-field';
import { ContactFormData } from '../../../types/types';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, CommonModule, NameField, TelephoneField, EmailField],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  standalone: true,
})

export class ContactForm {
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private snackBar = inject(MatSnackBar); 

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

  @Output() formSubmitted = new EventEmitter<ContactFormData>();

  onSubmit() {
    if (!this.contactForm.valid) {
      this.snackBar.open('Please fill all required fields', 'Close', { duration: 3500 });
      return;
    }

    if (this.contactForm.valid) {
      this.formSubmitted.emit(this.contactForm.value);
      this.resetFormCompletely();
    }
  }

  private resetFormCompletely() {
    this.contactForm.reset();
    
    this.contactForm.markAsUntouched();
    this.contactForm.markAsPristine();
    
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.setErrors(null);
    });
    
    this.cdr.detectChanges(); // Inyectar ChangeDetectorRef
  }
  
}
