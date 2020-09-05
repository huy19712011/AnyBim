import { Component, OnInit } from '@angular/core';

import { Product } from './../../models/product-interface';
import { ProductService } from './../../services/product.service';
import { Data2Service } from './../../../shared/services/data2.service';


const PRODUCT_API: string = 'http://localhost:8000/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    // private data2Service: Data2Service,
    ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[]) => {
    // this.data2Service.getAll(PRODUCT_API).subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
