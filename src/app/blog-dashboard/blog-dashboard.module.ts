import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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



@NgModule({
  declarations: [
    //containers
    BlogDashboardComponent, 
    //components
    BlogDetailComponent, 
    BlogFormComponent, BlogNavbarComponent, BlogListComponent, BlogViewerComponent, BlogAdminComponent, BlogDetailAdminComponent, BlogListAdminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    // BlogDashboardRoutingModule,
  ],
})
export class BlogDashboardModule { }
