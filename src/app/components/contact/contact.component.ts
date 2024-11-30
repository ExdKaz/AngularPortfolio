import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { LABELS } from '../../../shared/Labels';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../../../shared/contact.modal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  LABELS: any;
  contactForm: any = new Contact();

  constructor(private formBuilder: FormBuilder) {
    this.LABELS = LABELS.contact;
    this.form();
  }

  form() {
    this.contactForm = this.formBuilder.group({
      Firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1,}$')],],
      Lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1,}$')]],
      Email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      Phone: ['', [Validators.required, Validators.pattern('^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$')]],
      Comments: ['', [Validators.required]]
    })
  }

  submit() {
    if (this.contactForm.status === 'VALID') {
      console.log('Valid', this.contactForm);
    } else {
      console.log('Invalid', this.contactForm);
    }
  }

  cancel() {
    this.contactForm.reset();
  }

}
