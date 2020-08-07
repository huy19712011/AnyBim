import { Component, OnInit, Input } from '@angular/core';
import { Article } from './../../models/article.interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  @Input()
  article: Article;

  constructor() { }

  ngOnInit(): void {
    
  }

}
