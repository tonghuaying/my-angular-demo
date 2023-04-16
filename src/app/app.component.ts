import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  visible: boolean = false;

  onclose (): void {
    this.visible = false;
  }

  onopen (): void {
    this.visible = true;
  }

  onsubmit (form: NgForm): void {
    console.log(form.value)
  }
}
