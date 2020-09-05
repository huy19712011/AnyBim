import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Product } from './../models/product-interface';
import { DataService } from '../../shared/services/data.service';

const PRODUCT_API: string = 'http://localhost:8000/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService {

  constructor(http: HttpClient) {
    super(PRODUCT_API, http);
  }

}
