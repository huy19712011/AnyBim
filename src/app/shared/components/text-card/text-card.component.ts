import { Component, OnInit, Input } from '@angular/core';

import { Benefit } from './../../../product-dashboard/containers/product-anyon/product-anyon-benefits';
import { Problem } from './../../../product-dashboard/containers/product-anyon/product-anyon-problems';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss']
})
export class TextCardComponent implements OnInit {

  @Input() item: any;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
