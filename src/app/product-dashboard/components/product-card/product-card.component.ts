import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../../models/product-interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;

  
  constructor() { }

  ngOnInit(): void {
  }

}
