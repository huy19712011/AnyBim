import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, filter} from 'rxjs/operators';

import { Article } from './models/article.interface';

const BLOG_API: string = 'http://localhost:8000/articles';

@Injectable({
  providedIn: 'root'
})
export class BlogDashboardService {

  constructor(private http: HttpClient) { }

  
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(BLOG_API)
      .pipe(
        tap(data => console.log('Fetched Articles: ', data)),
        map(articles => articles.filter(article => article.published === true)),
        catchError(this.handleError<Article[]>('getArticles', [])),
      );
  }


  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${BLOG_API}/${id}`)
      .pipe(
        tap(data => console.log('Fetched Article: ', data)),
        catchError(this.handleError<Article>('getArticle')),
      );
  }


  updateArticle(article: Article): Observable<Article> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let options = {
      headers: headers,
    };

    /** Docs in Angular.io
     options = {
       headers?: HttpHeaders | {[header: string]: string | string[]},
       observe?: 'body' | 'events' | 'response',
       params?: HttpParams|{[param: string]: string | string[]},
       reportProgress?: boolean,
       responseType?: 'arraybuffer'|'blob'|'json'|'text',
       withCredentials?: boolean,
     }
    **/

    return this.http.put<Article>(`${BLOG_API}/${article.id}`, article, options)
     .pipe(
       tap(data => console.log('Updated: ', data)),
       catchError(this.handleError<Article>('updateArticle', article)),
     );
  }


  removeArticle(article: Article): Observable<Article> {
    return this.http.delete<Article>(`${BLOG_API}/${article.id}`)
      .pipe(
        tap(data => console.log('Deleted: ', data)),
        catchError(this.handleError<Article>('removeArticle')),
      );
  }

  createArticle(article: Article): Observable<Article> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let options = {
      headers: headers,
    };

    return this.http.post<Article>(`${BLOG_API}`, article, options)
      .pipe(
        tap(data => console.log('Created: ', data)),
        catchError(this.handleError<Article>('createArticle', article)),
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
