import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Article } from './../../models/article.interface';
import { BlogDashboardService } from './../../blog-dashboard.service';
import { Title } from '@angular/platform-browser';


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
      this.titleService.setTitle(`${this.article.title} - AnyBim Blog`);
    });
  }

}
