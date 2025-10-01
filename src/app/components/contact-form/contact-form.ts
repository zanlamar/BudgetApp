import { Component, inject } from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  standalone: true,
})
export class ContactForm {
  private fb = inject(FormBuilder);

  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userTelephone: ['', Validators.required]
    });
  }

  updateName() {
    this.contactForm.get('userName')?.setValue('Ana');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.warn(this.contactForm.value);
    };
  }

}
