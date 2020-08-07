import { Component, OnInit, Input } from '@angular/core';

import { Article } from './../../models/article.interface';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  @Input()
  article: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
