import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

// import { BlogDashboardRoutingModule } from './blog-dashboard/blog-dashboard-routing.module';
// import { BlogDashboardModule } from './blog-dashboard/blog-dashboard.module';


const routes: Routes = [
  {path: '', redirectTo: 'admin/articles', pathMatch: 'full'},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  // { path: 'admin/articles', loadChildren: () => import('./blog-dashboard/blog-dashboard.module').then(m => m.BlogDashboardModule) },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // BlogDashboardRoutingModule,
    // BlogDashboardModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
