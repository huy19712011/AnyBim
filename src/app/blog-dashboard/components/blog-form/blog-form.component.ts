import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Article } from './../../models/article.interface';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  @Input()
  article: Article;
  
  @Input()
  saved: boolean = false;
  @Input()
  isNew: boolean = false;
  
  @Output()
  updateArticle: EventEmitter<Article> = new EventEmitter<Article>();
  
  @Output()
  createArticle: EventEmitter<Article> = new EventEmitter<Article>();
  
  @Output()
  deleteArticle: EventEmitter<Article> = new EventEmitter<Article>();

  @Output()
  viewArticle: EventEmitter<Article> = new EventEmitter<Article>();

  @Output()
  getNewArticle: EventEmitter<Article> = new EventEmitter<Article>();
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onUpdateArticle(article: Article) {
    this.updateArticle.emit(article);
  }
  
  onCreateArticle(article: Article) {
    this.createArticle.emit(article);
  }
  
  onDeleteArticle(article: Article) {
    this.deleteArticle.emit(article);
  }
  
  onViewPreview(article: Article) {
    this.viewArticle.emit(article);
  }


  onGetNewArticle(article: Article) {
    this.getNewArticle.emit(article);
  }
  
  // updateKey(value: Article): void {
  //   if (this.article) {
  //     this.article.key = value.title
  //       .toLowerCase()
  //       .replace(new RegExp(" ", "g"), "-");
  //     console.log('Change');
  //   }
  // }
  
  updateKey(value: string): void {
    if (this.article) {
      this.article.key = value
        .toLowerCase()
        .replace(new RegExp(" ", "g"), "-");
      console.log('Change');
    }
  }
  
}
