import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-method',
  templateUrl: './form-method.component.html',
  styleUrls: ['./form-method.component.css']
})
export class FormMethodComponent {

  form: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  })

  onSubmit () {
    console.log(this.form.value)
  }

  onReset () {
    this.form.reset()
  }

  // 可以设置单个值
  onPatchValue () {
    this.form.patchValue({
      firstName: 'setFirstName'
    })
  }

  // 必须设置全部值
  onSetValue () {
    this.form.setValue({
      firstName: '123',
      lastName: '456'
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form.get('lastName')?.valueChanges.subscribe((val) => {
      console.log(val)
    })
  }

}
