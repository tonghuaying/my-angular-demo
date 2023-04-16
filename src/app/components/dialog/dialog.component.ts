import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  
  constructor(private test: TestService) {
    console.log(this.test)
  }
  @Output('close') close = new EventEmitter()
  @Input('visible') isshow: boolean = false

  onclick () {
    this.close.emit();
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.isshow)
  }
}
