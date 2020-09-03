import { NgModule } from '@angular/core';

import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';


const MaterialComponents = [
  MatGridListModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  
  FlexLayoutModule,
];


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MaterialComponents,
  ]
})
export class MaterialModule { }
