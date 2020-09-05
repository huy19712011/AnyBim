import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './../shared/modules/material.module';

import { ProductDashboardRoutingModule } from './product-dashboard-routing.module';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductViewComponent } from './containers/product-view/product-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [ProductListComponent, ProductViewComponent, ProductCardComponent],
  imports: [
  CommonModule,
    HttpClientModule,
    MaterialModule,
    ProductDashboardRoutingModule,
  ]
})
export class ProductDashboardModule { }
