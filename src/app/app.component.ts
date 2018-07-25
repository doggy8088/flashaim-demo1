import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  keyword = '';
  data: any[] = [];

  constructor(private datasvc: DataService) {
  }

  ngOnInit(): void {
    this.datasvc.load().subscribe((json: any[]) => {
      this.data = json;
    });
  }

  deleteArticle(id: number) {
    this.data = this.data.filter((value, index) => {
      return value.id != id;
    })
  }

  changeArticleTitle(change: {id: number, newTitle: string}) {

    // this.data.forEach((value, index) => {
    //   if (value.id == change.id) {
    //     value.title = change.newTitle;
    //   }
    // })

    this.data = this.data.map((value, index) => {
      if (value.id == change.id) {

        // BAD CODE
        // value.title = change.newTitle;
        // return value;

        // Object spread operator
        return {...value, title: change.newTitle};

        // ES5 Object.assign()
        // return Object.assign(value, { title: change.newTitle});
      }
      else {
        return value;
      }
    });
  }

  keywordChange(value: string) {
    this.keyword = value;
  }
}
