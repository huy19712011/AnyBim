import { Component, OnInit, Input } from '@angular/core';

import { Price } from './../../../product-dashboard/containers/product-anyon/product-anyon-prices';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent implements OnInit {
  @Input() price: Price;

  constructor() { }

  ngOnInit(): void {
  }

}
