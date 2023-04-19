import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CanLeave } from './guards/unsave.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements CanLeave {
  title = 'angular-demo';

  visible: boolean = false;

  form: FormGroup = new FormGroup({
    username: new FormControl()
  })

  canLeave () {
    return !this.form.get('username')!.dirty
  }

  onclose (): void {
    this.visible = false;
  }

  onopen (): void {
    this.visible = true;
  }

  onsubmit (form: NgForm): void {
    console.log(form.value)
  }

  onConfirm () {

  }
}
