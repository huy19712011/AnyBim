import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, shareReplay} from 'rxjs/operators';

import { JwtHelperService } from "@auth0/angular-jwt";


const BLOG_API: string = 'http://localhost:8000/auth';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  currentUser: any;

  constructor(
    private http: HttpClient,
    private jwt: JwtHelperService,
  ) { 
    let token = localStorage.getItem('token');
    if (token) {
      this.currentUser = this.jwt.decodeToken(token);
    }
  }


  login(email: string, password: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let options = {
      headers: headers,
    };

    return this.http.post<any>(`${BLOG_API}`, {email: email, password: password}, options)
      .pipe(
        /**
          Mosh Hamedani
        **/
        map(response => {
          let result = response.json();
          
          if (result && result.token) {
            localStorage.setItem('token', result.token);
            this.currentUser = this.jwt.decodeToken(localStorage.getItem('token'));
            return true; 
          }
          
          return false; 
        }),

        /**
          Angular university
        **/
        shareReplay(),
      );
  }

  
  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() { 
    let token: string;
    if (typeof localStorage !== "undefined") {
      token = localStorage.token ? localStorage.token : "";
    }

    return !this.jwt.isTokenExpired(token);
  }
  
  
  /**
    Patrick tutorial
    Need some additional code for BackEnd: POST /auth/check (to check auth)
  **/
  auth(): Observable<boolean> {
    let token: string;
    if (typeof localStorage !== "undefined") {
      token = localStorage.token ? localStorage.token : "";
    }

    return this.http.post<boolean>(`${BLOG_API}/check`, {
      token
    });
  }

}
