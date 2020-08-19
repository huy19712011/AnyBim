import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDashboardComponent } from './containers/blog-dashboard/blog-dashboard.component';
import { BlogViewerComponent } from './containers/blog-viewer/blog-viewer.component';
import { BlogAdminComponent } from './containers/blog-admin/blog-admin.component';
import { BlogAdminViewerComponent } from './containers/blog-admin-viewer/blog-admin-viewer.component';
import { BlogAdminNewComponent } from './containers/blog-admin-new/blog-admin-new.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  // Admin
  { path: 'admin/articles/new', component: BlogAdminNewComponent},
  { path: 'admin/articles/:id', component: BlogAdminViewerComponent},
  { path: 'admin/articles', component: BlogAdminComponent, canActivate: [AuthGuardService]},
  { path: 'auth', component: LoginComponent},
  // Users
  { path: 'articles/:id', component: BlogViewerComponent},
  { path: 'articles', component: BlogDashboardComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class BlogDashboardRoutingModule { }
