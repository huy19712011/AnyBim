import { Component, OnInit } from '@angular/core';
import { Problem } from './product-anyon-problems';
import { ProductAnyonService } from './../../services/product-anyon.service';
import { Benefit } from './product-anyon-benefits';
import { Price } from './product-anyon-prices';

@Component({
  selector: 'app-product-anyon',
  templateUrl: './product-anyon.component.html',
  styleUrls: ['./product-anyon.component.scss']
})
export class ProductAnyonComponent implements OnInit {
  problems: Problem[];
  benefits: Benefit[];
  prices: Price[];

  constructor(
    private productAnyonService: ProductAnyonService,
  ) { }

  ngOnInit(): void {
    this.problems = this.productAnyonService.getProblems();

    this.benefits = this.productAnyonService.getBenefits();

    this.prices = this.productAnyonService.getPrices();
  }

}
