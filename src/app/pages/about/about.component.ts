import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor (private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.route.queryParamMap.subscribe(query => {
    //   console.log(query.get('name'))
    // })

    // 动态传参
    this.route.paramMap.subscribe(query => {
      console.log(query.get('name'))
    })
  }

}
