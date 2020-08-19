import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BlogDashboardComponent } from './containers/blog-dashboard/blog-dashboard.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { BlogNavbarComponent } from './components/blog-navbar/blog-navbar.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
// import { BlogDashboardRoutingModule } from './blog-dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { BlogViewerComponent } from './containers/blog-viewer/blog-viewer.component';
import { BlogAdminComponent } from './containers/blog-admin/blog-admin.component';
import { BlogDetailAdminComponent } from './components/blog-detail-admin/blog-detail-admin.component';
import { BlogListAdminComponent } from './components/blog-list-admin/blog-list-admin.component';
import { BlogHeaderAdminComponent } from './components/blog-header-admin/blog-header-admin.component';
import { BlogAdminViewerComponent } from './containers/blog-admin-viewer/blog-admin-viewer.component';
import { BlogAdminNewComponent } from './containers/blog-admin-new/blog-admin-new.component';
import { LoginComponent } from './components/login/login.component';
import { Interceptor } from './interceptor';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    //containers
    BlogDashboardComponent, 
    //components
    BlogDetailComponent, 
    BlogFormComponent, BlogNavbarComponent, BlogListComponent, BlogViewerComponent, BlogAdminComponent, BlogDetailAdminComponent, BlogListAdminComponent, BlogHeaderAdminComponent, BlogAdminViewerComponent, BlogAdminNewComponent, LoginComponent
  ],
  imports: [
  CommonModule,
    HttpClientModule,
    RouterModule,
    // BlogDashboardRoutingModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
})
export class BlogDashboardModule { }
