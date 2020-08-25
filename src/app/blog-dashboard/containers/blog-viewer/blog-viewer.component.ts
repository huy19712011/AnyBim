import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Article } from './../../models/article.interface';
import { BlogDashboardService } from './../../blog-dashboard.service';
import { GlobalConstants } from './../../../shared/GlobalConstants/global-constants';



@Component({
  selector: 'app-blog-viewer',
  templateUrl: './blog-viewer.component.html',
  styleUrls: ['./blog-viewer.component.scss']
})
export class BlogViewerComponent implements OnInit {
  article: Article;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogDashboardService,
    private titleService: Title,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        // let id = Number(params.get('id'));
        // console.log(params);
        // console.log(this.route.params);
        return this.blogService.getArticle(Number(params.get('id')));
      }),
    ).subscribe((data: Article) => {
      // console.log(data);
      this.article = data;
      this.titleService.setTitle(`${GlobalConstants.BLOG_TITLE}-${this.article.title}`);
      this.meta.addTags([
        {name: "description", content: this.article.description},
        {property: "og:type", content: `${GlobalConstants.BLOG_TITLE}-${this.article.title}`},
        {property: "og:title", content: "website"},
        {property: "og:url", content: GlobalConstants.BLOG_URL + this.article.title},
        {property: "og:image", content: this.article.imageUrl},
        {property: "og:description", content: this.article.description},
        {property: "og:site-name", content: this.article.title},
      ]);
    });
  }

}
