import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  changeTitle = new EventEmitter<any>();

  isEditing = false;

  constructor() { }

  ngOnInit() {
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }

  doEditTitle() {
    this.isEditing = true;
  }

  doSaveTitle(newTitle) {
    this.isEditing = false;
    // this.item.title = newTitle;
    this.changeTitle.emit({
      id: this.item.id,
      newTitle: newTitle
    });
  }

  doCancelTitle() {
    this.isEditing = false;
  }
}
