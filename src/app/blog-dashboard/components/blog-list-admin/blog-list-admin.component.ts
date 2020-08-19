import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './../../models/article.interface';

@Component({
  selector: 'app-blog-list-admin',
  templateUrl: './blog-list-admin.component.html',
  styleUrls: ['./blog-list-admin.component.scss']
})
export class BlogListAdminComponent implements OnInit {
  @Input()
  article: Article;

  @Output()
  emitTogglePublishState: EventEmitter<Article> = new EventEmitter<Article>();
  
  constructor() { }

  ngOnInit(): void {
  }

  togglePublishState(article: Article) {
    // console.log(article);
    this.article.published = !this.article.published;
    
    this.emitTogglePublishState.emit(article);
  }

}
