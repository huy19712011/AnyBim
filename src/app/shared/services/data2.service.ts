import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


// import { Article } from '../../blog-dashboard/models/article.interface';

// let URL_API: string;

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(
    // private URL_API: string,
    private http: HttpClient,
    // private toastr: ToastrService,
  ) {}

  
  getAll(url: string): Observable<any[]> {
    return this.http.get<any[]>(url)
      .pipe(
        tap(data => console.log('Fetched data: ', data)),
        // catchError(this.handleError<Article[]>('getArticles', [])),
        // catchError(error => this.handleError2(error)),
      );
  }


  get(url: string, id: number): Observable<any> {
    return this.http.get<any>(`${url}/${id}`)
      .pipe(
        tap(data => console.log('Fetched data: ', data)),
        // catchError(this.handleError<Article>('getArticle')),
        // catchError(error => this.handleError2(error)),
      );
  }


  update(url: string, item: any): Observable<any> {
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

    return this.http.put<any>(`${url}/${item.id}`, item, options)
     .pipe(
       tap(data => console.log('Updated: ', data)),
       // catchError(this.handleError<Article>('updateArticle', article)),
        // catchError(error => this.handleError2(error)),
     );
  }


  remove(url: string, item: any): Observable<any> {
    return this.http.delete<any>(`${url}/${item.id}`)
      .pipe(
        // tap(data => console.log('Deleted: ', data)),
        
        // catchError(this.handleError<any>()),
        // catchError(this.handleError<Article>('removeArticle')),
        // catchError(error => this.handleError2(error)),
      );
  }

  create(url: string, item: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let options = {
      headers: headers,
    };

    return this.http.post<any>(`${url}`, item, options)
      .pipe(
        tap(data => console.log('Created at HttpClient Service: ', data)),
        // catchError(this.handleError<Article>('createArticle', article)),
        // catchError(error => this.handleError2(error)),
      );
  }


  /**
    These 2 handle-error functions we can move to interceptors
    handleError2: can use in interceptors
    handleError: do not use in interceptors ???

    If use handleError here in service => component do not react with error
  **/
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     // console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     // alert(`${operation} failed: ${error.message}`);
  //     // alert(`${operation} failed: ${error.error}`);

  //     let errorMessage = '';
  //     if (error.error instanceof ErrorEvent) {
  //       // client-side error
  //       errorMessage = `Error: ${error.error.message}`;
  //     } else {
  //       // server-side error
  //       errorMessage = `Error Code: ${error.status}<br>Message: ${error.message}<br>Error: ${error.error}`;
  //       // errorMessage = `Error Code: ${error.status}<br>Error: ${error.error}`;
  //     }
  //     this.toastr.error(errorMessage, 'Error', {timeOut: 3000});
  //     // alert(errorMessage);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }


  // private handleError2(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}<br>Message: ${error.message}<br>Error: ${error.error}`;
  //     // errorMessage = `Error Code: ${error.status}<br>Error: ${error.error}`;
  //   }
  //   this.toastr.error(errorMessage, 'Error', {timeOut: 3000});
  //   // alert(errorMessage);
    
  //   return throwError(error);
  // }

}

