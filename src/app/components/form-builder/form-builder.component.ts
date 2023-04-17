import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  contactForm: FormGroup

  constructor (private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: this.fb.group({
        firstName: ['default value', [Validators.required]],
        lastName: ['', [Validators.required]]
      }),
      phone: []
    })
  }

  onSubmit () {
    console.log(this.contactForm.value)
  }
}
