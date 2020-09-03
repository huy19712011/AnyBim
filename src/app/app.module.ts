import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { SharedModule } from './shared/shared.module';
import { BlogDashboardModule } from './blog-dashboard/blog-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 2000, enableHtml: true }),
    SharedModule,
    BlogDashboardModule,
    
    AppRoutingModule, //this must be called last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
