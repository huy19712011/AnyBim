import { Component, OnInit } from '@angular/core';

import { BlogDashboardService } from '../../blog-dashboard.service';

import { Article } from '../../models/article.interface';


@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.scss']
})
export class BlogDashboardComponent implements OnInit {
  articles: Article[];
  
  constructor (
    private dashboardService: BlogDashboardService,
  ) { }

  ngOnInit(): void {
    this.dashboardService.getArticles().subscribe((data: Article[]) => {
      console.log('Data: ', data);
      this.articles = data;
    });
  }

  handleViewCount(event: Article) {
    event.viewCount = event.viewCount + 1;
    this.dashboardService.updateArticle(event).subscribe((data: Article) => {
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
