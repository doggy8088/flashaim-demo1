import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit, OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

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
