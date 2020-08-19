import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, shareReplay} from 'rxjs/operators';


const BLOG_API: string = 'http://localhost:8000/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }


  login(email: string, password: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let options = {
      headers: headers,
    };

    return this.http.post<any>(`${BLOG_API}`, {email: email, password: password}, options)
      .pipe(
        // tap(data => console.log('Created at HttpClient Service: ', data)),
        // catchError(this.handleError<any>('login', {email, password})),
        
        
        /**
          Mosh Hamedani
        **/
        // map(response => {
        //   let result = response.json();
          
        //   if (result && result.token) {
        //     localStorage.setItem('token', result.token);
    
        //     return true; 
        //   }
        //   else return false; 
        // }),

        // catchError(this.handleError<any>('login', {email, password})),

        /**
          Angular university
        **/
        shareReplay(),
      );
  }

  auth(): Observable<boolean> {
    let token: string;
    if (typeof localStorage !== "undefined") {
      token = localStorage.token ? localStorage.token : "";
    }

    return this.http.post<boolean>(`${BLOG_API}/check`, {
      token
    });
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('Error123: ',error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
