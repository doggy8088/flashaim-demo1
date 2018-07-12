import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  keyword = '';
  data: any = {};

  ngOnInit(): void {

    fetch('/api/articles.json')
      .then((response) => {
        return response.text();
      }).then((json) => {
        this.data = JSON.parse(json);
      });

  }

  keywordChange(value: string) {
    this.keyword = value;
  }
}
