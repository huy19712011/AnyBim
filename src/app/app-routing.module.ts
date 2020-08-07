import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

import { BlogDashboardRoutingModule } from './blog-dashboard/blog-dashboard-routing.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BlogDashboardRoutingModule,
  ],
exports: [RouterModule]
})
export class AppRoutingModule { }
