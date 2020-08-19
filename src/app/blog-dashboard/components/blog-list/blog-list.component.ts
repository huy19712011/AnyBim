import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './../../models/article.interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  @Input()
  article: Article;

  @Output()
  viewCount: EventEmitter<Article> = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
    
  }

  viewCountChange(event: Article) {
    this.viewCount.emit(event);
    console.log(event);
  }

}
