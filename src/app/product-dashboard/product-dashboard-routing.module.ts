import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductViewComponent } from './containers/product-view/product-view.component';


const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: ':id', component: ProductViewComponent},
      { path: '', component: ProductListComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDashboardRoutingModule { }
