import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {

  form: FormGroup = new FormGroup({
    gender: new FormControl()
  })

  onSubmit () {
    console.log(this.form.value)
  }
}
