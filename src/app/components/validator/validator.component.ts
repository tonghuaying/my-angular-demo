import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './myValidators';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent {
  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      // MyValidators.cannotContainSpace
    ])
  })

  get name () {
    return this.userForm.get('name')
  }

  onSubmit () {
    console.log(this.userForm.valid)
  }
}
