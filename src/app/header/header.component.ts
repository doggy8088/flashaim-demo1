import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'The Will Will Web';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  logourl = '/assets/images/logo.png';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sitename = 'Hello World';
    }, 2000);
  }

  changeTitle(evt: MouseEvent) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
