import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { httpInterceptorProviders } from './http-interceptors/index';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PriceCardComponent } from './components/price-card/price-card.component';



@NgModule({
  declarations: [TopBarComponent, FooterComponent, NotFoundComponent, ContactFormComponent, PriceCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    TopBarComponent,
    FooterComponent,
    NotFoundComponent,
    ContactFormComponent,
    PriceCardComponent,
  ],
  providers: [
    httpInterceptorProviders,
  ]
})
export class SharedModule { }

