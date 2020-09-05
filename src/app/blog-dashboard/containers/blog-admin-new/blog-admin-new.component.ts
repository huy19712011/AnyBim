import { Component, OnInit } from '@angular/core';

import { Article } from './../../models/article.interface';
import { BlogAdminService } from './../../blog-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-admin-new',
  templateUrl: './blog-admin-new.component.html',
  styleUrls: ['./blog-admin-new.component.scss']
})
export class BlogAdminNewComponent implements OnInit {
  article: Article;

  constructor(
    private blogService: BlogAdminService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  handleCreateArticle(article: Article) {
    console.log(article);
    // this.blogService.createArticle(article).subscribe(data => {
    this.blogService.create(article).subscribe(data => {
      this.article = data;
      console.log('Resolved: ', data);
    });
  }

  handleGetNewArticle(article: Article) {
    this.router.navigate(['/articles', this.article.id]);
  }

}
