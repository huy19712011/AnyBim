import { Injectable } from '@angular/core';
import { PROBLEMS, Problem } from '../containers/product-anyon/product-anyon-problems';
import { Benefit, BENEFITS } from './../containers/product-anyon/product-anyon-benefits';

@Injectable({
  providedIn: 'root'
})
export class ProductAnyonService {

  constructor() { }

  getProblems(): Problem[] {
    return PROBLEMS;
  }

  getBenefits(): Benefit[] {
    return BENEFITS;
  }
}
