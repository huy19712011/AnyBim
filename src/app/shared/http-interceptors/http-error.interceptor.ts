import { 
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

//Rxjs
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        retry(1),
        // following will not work (need add parameter error to function to work)
        // catchError(this.handleError2), // not work
        
        /**
         https://stackoverflow.com/questions/52165619/angular-6-service-is-undefined-after-injecting-in-interceptor
         catchError(this.handleError2)  // does not work because of different scope
         catchError(err => this.handleError2(err))  // works because of same scope
        **/
        
        // catchError(this.handleError<any>()),
        catchError(error => this.handleError2(error)),
      );
  }

  /**
    we can control workflow if success or error on component
  **/
  private handleError2(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}<br>Message: ${error.message}<br>Error: ${error.error}`;
      // errorMessage = `Error Code: ${error.status}<br>Error: ${error.error}`;
    }
    this.toastr.error(errorMessage, 'Error', {timeOut: 3000});
    // alert(errorMessage);
    
    return throwError(error);
  }


  /**
    if error ocured => does not jump to component (component can not react to error - component do nothing if error)
    do not use in interceptor ???
  **/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // alert(`${operation} failed: ${error.message}`);
      // alert(`${operation} failed: ${error.error}`);

      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}<br>Message: ${error.message}<br>Error: ${error.error}`;
        // errorMessage = `Error Code: ${error.status}<br>Error: ${error.error}`;
      }
      this.toastr.error(errorMessage, 'Error', {timeOut: 3000});
      // alert(errorMessage);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
