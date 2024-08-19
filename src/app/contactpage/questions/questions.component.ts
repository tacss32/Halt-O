import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-questions',
  standalone: true,
  templateUrl: './questions.component.html',
  imports: [ReactiveFormsModule],
})
export class QuestionsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      place: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      const mailtoLink = this.generateMailtoLink(formData);
      window.location.href = mailtoLink;
    }
  }

  generateMailtoLink(formData: any): string {
    const subject = `Question from ${formData.name}`;
    const body = `Name: ${formData.name}\nPlace: ${formData.place}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    return `mailto:contact@halt-o.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
}
