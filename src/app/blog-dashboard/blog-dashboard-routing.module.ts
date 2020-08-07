import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDashboardComponent } from './containers/blog-dashboard/blog-dashboard.component';
import { BlogViewerComponent } from './containers/blog-viewer/blog-viewer.component';
import { BlogAdminComponent } from './containers/blog-admin/blog-admin.component';


const routes: Routes = [
  { path: 'articles/admin', component: BlogAdminComponent},
  { path: 'articles/:id', component: BlogViewerComponent},
  { path: 'articles', component: BlogDashboardComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDashboardRoutingModule { }
