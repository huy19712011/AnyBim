import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


import { BlogDashboardService } from '../../blog-dashboard.service';
import { GlobalConstants } from './../../../shared/GlobalConstants/global-constants';

import { Data2Service } from './../../../shared/services/data2.service';

import { Article } from '../../models/article.interface';

const BLOG_API: string = 'http://localhost:8000/articles';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.scss']
})
export class BlogDashboardComponent implements OnInit {
  articles: Article[];
  title: string = 'articles';


  
  constructor (
    private dashboardService: BlogDashboardService,
    private titleService: Title,
    private data2Service: Data2Service,
  ) { }

  ngOnInit(): void {
    // this.dashboardService.getArticles().subscribe((data: Article[]) => {
    this.data2Service.getAll(BLOG_API).subscribe((data: Article[]) => {
      console.log('Data: ', data);
      this.articles = data;
    });

    this.titleService.setTitle(`${GlobalConstants.BLOG_TITLE}-${this.title}`);
  }

  handleViewCount(event: Article) {
    event.viewCount = event.viewCount + 1;
    // this.dashboardService.updateArticle(event).subscribe((data: Article) => {
    this.data2Service.update(BLOG_API, event).subscribe((data: Article) => {
      console.log(data);
      
      this.articles = this.articles.map((article: Article) => {
        if (article.id === event.id) {
          article = Object.assign({}, article, event);
        }
        return article;
      });
    });

  }

}
