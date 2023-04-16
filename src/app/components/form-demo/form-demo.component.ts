import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent {

  userForm = new FormGroup({
    username: new FormControl('zhangsan'),
    age: new FormControl(20)
  })

  onSubmit() : void {
    console.log(this.userForm.value)
  }
}
