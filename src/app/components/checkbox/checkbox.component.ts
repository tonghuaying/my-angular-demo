import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


interface ListItem {
  name: string
  value: string
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  ListData: ListItem[] = [
    { name: 'Pear', value: 'pear'},
    { name: 'Apple', value: 'apple'},
    { name: 'Melon', value: 'melon'},
    { name: 'Orange', value: 'orange'},
    { name: 'Water', value: 'water'},
  ]

  form: FormGroup

  constructor (private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
  }

  onSubmit () {
    console.log(this.form.value)
  }

  onChange (event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    const checked = target.checked
    const checkArray = this.form.get('checkArray') as FormArray
    if (checked) {
      checkArray.push(this.fb.control(value))
    } else {
      const index = checkArray.controls.findIndex(control => control.value === value)
      checkArray.removeAt(index)
    }
  }
}
