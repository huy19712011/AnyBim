import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Article } from './../../models/article.interface';
import { BlogAdminService } from './../../blog-admin.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-blog-admin-viewer',
  templateUrl: './blog-admin-viewer.component.html',
  styleUrls: ['./blog-admin-viewer.component.scss']
})
export class BlogAdminViewerComponent implements OnInit {
  article: Article;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogAdminService,
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
      // this.titleService.setTitle(`${this.article.title} - AnyBim Blog`);
    });
  }


  handleUpdateArticle(event: Article) {
    // console.log(this.article);
    // console.log(event);
    // console.log({...this.article, ...event});
    
    // const article = {...this.article, ...event};

    this.blogService.updateArticle({...this.article, ...event}).subscribe((data: Article) => {
      console.log(data);
      
      // this.article = Object.assign({}, this.article, event);
      // this.article = {...this.article, ...data};
      this.article = data;
    });
  }


  handleViewArticle(event: Article) {
    this.router.navigate(['/articles', event.id]);
  }
  
  
  handleDeleteArticle(event: Article) {
    this.blogService.removeArticle({...this.article, ...event}).subscribe((data: Article) => {
      console.log(data);
      this.router.navigate(['/admin/articles'])
    });
  }

}
