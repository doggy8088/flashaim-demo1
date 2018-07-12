import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  sitename = 'The Will Will Web';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  logourl = '/assets/images/logo.png';

  clickCount = 0;

  @Input() data: any;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sitename = 'Hello World';
    }, 2000);
  }

  changeTitle(evt: MouseEvent) {
    this.clickCount++;
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

  getStyle() {
    return {
      'font-size': (12 + this.clickCount)+'px',
      'color': 'red'
    };
  }

}
