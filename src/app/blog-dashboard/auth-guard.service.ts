import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { map } from 'rxjs/operators';

import { Auth2Service } from './auth2.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private authService: Auth2Service,
    private router: Router,
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/auth']);
    return false;
    
    // return this.authService.auth().pipe(
    //   map(isAuthenticated => {
    //     if (!isAuthenticated) {
    //       this.router.navigate(["/auth"]);
    //     }
    //     console.log('isAuthenticated: ', isAuthenticated);
    //     return isAuthenticated;
    //   }),
    // );
  
  }
}
