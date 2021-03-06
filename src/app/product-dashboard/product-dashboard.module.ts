import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { MaterialModule } from './../shared/modules/material.module';

import { ProductDashboardRoutingModule } from './product-dashboard-routing.module';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductViewComponent } from './containers/product-view/product-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductNavbarComponent } from './components/product-navbar/product-navbar.component';
import { ProductListDetailComponent } from './components/product-list-detail/product-list-detail.component';
import { ProductAnyonComponent } from './containers/product-anyon/product-anyon.component';
import { ProductTingconnectComponent } from './containers/product-tingconnect/product-tingconnect.component';
import { ProductSmartmtoComponent } from './containers/product-smartmto/product-smartmto.component';
import { PriceListCardComponent } from './components/price-list-card/price-list-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductListComponent, ProductViewComponent, ProductCardComponent, ProductNavbarComponent, ProductListDetailComponent, ProductAnyonComponent, ProductTingconnectComponent, ProductSmartmtoComponent, PriceListCardComponent],
  imports: [
  CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ProductDashboardRoutingModule,
  ]
})
export class ProductDashboardModule { }
