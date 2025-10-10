import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactForm } from './contact-form';

describe('ContactForm Component', () => {
    let component: ContactForm;
    let fixture: ComponentFixture<ContactForm>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, ContactForm]
        }).compileComponents();

        fixture = TestBed.createComponent(ContactForm);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should emit formSubmitted when form is valid', () => {
        spyOn(component.formSubmitted, 'emit');
    component.contactForm.setValue({
        userName: 'Laura',
        userEmail: 'laura@test.com',
        userTelephone: '123456789'
    });

    component.onSubmit();
    expect(component.formSubmitted.emit).toHaveBeenCalledWith({
        userName: 'Laura',
        userEmail: 'laura@test.com',
        userTelephone: '123456789'
    });
});

    it('should not emit formSubmitted when form is invalid', () => {
        spyOn(component.formSubmitted, 'emit');

        component.contactForm.setValue({
        userName: '',
        userEmail: 'invalid',
        userTelephone: 'abc'
        });

    component.onSubmit();

    expect(component.formSubmitted.emit).not.toHaveBeenCalled();
});

it('should reset form after successful submission', () => {
    spyOn(component.formSubmitted, 'emit');

    component.contactForm.setValue({
        userName: 'Laura',
        userEmail: 'laura@test.com',
        userTelephone: '123456789'
    });

    component.onSubmit();

    expect(component.contactForm.pristine).toBeTrue();
    expect(component.contactForm.untouched).toBeTrue();
    });
});
