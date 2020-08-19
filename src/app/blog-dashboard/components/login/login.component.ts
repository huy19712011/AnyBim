import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user.interface';
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  errorMessage = "";
  
  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }
    
    ngOnInit(): void {
    }
    
    login(email: string, password: string) {
      this.errorMessage = "";
      
      this.authService.login(email, password)
        .subscribe(
          result => {
            console.log('Result: ', result);
            console.log('Result: ', result.token);
            if (typeof localStorage !== "undefined") {
              localStorage.setItem("token", result.token);
            }
            
            this.router.navigate(["/admin/articles"]);
          },
          error => {
            this.errorMessage = "Email or password is wrong.";
          }
          );
      }
      
    }
    