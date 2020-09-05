import { Component, OnInit } from '@angular/core';
import { Article } from './../../models/article.interface';
import { BlogAdminService } from './../../blog-admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {
  articles: Article[];

  constructor(
    private adminService: BlogAdminService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.adminService.getArticles().subscribe((data: Article[]) => {
    this.adminService.getAll().subscribe((data: Article[]) => {
      console.log('Data: ', data);
      this.articles = data;
    });

  }

  handleTogglePublishState(event: Article) {
    console.log(event);
    // this.adminService.updateArticle(event).subscribe((data: Article) => {
    this.adminService.update(event).subscribe((data: Article) => {
      this.articles = this.articles.map((article: Article) => {
        if (article.id === data.id) {
          // article = Object.assign({}, article, event);
          article = {...article, ...event};
        }
        return article;
      });
    });
  }

  togglePublishState(event: Article) {
    // console.log(event);
    event.published = !event.published;
    // this.adminService.updateArticle(event).subscribe((data: Article) => {
    this.adminService.update(event).subscribe((data: Article) => {
      this.articles = this.articles.map((article: Article) => {
        if (article.id === event.id) {
          // article = Object.assign({}, article, event);
          article = {...article, ...event};
        }
        return article;
      });
    });
  }

  create() {
    this.router.navigate(['/admin/articles/new']);
  }

}


