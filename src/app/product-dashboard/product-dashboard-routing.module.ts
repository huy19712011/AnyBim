import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductViewComponent } from './containers/product-view/product-view.component';
import { ProductAnyonComponent } from './containers/product-anyon/product-anyon.component';
import { ProductTingconnectComponent } from './containers/product-tingconnect/product-tingconnect.component';
import { ProductSmartmtoComponent } from './containers/product-smartmto/product-smartmto.component';


const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '1/:tingconnect', component: ProductTingconnectComponent},
      { path: '1', component: ProductTingconnectComponent},
      { path: '2/:anyon', component: ProductAnyonComponent},
      { path: '2', component: ProductAnyonComponent},
      { path: '3/:smartmto', component: ProductSmartmtoComponent},
      { path: '3', component: ProductSmartmtoComponent},
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
