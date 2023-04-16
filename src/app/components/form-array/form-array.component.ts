import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  contactForm: FormGroup = new FormGroup({
    contacts: new FormArray([])
  })

  get contacts () {
    return this.contactForm.get('contacts') as FormArray
  }

  addContact () {
    let myContact = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    })
    this.contacts.push(myContact)
  }

  removeContact (index: number) {
    this.contacts.removeAt(index)
  }

  onSubmit() : void {
    console.log(this.contacts.value)
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.addContact()
  }
}
