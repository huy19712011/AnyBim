import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




@NgModule({
  declarations: [TopBarComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    TopBarComponent,
    FooterComponent,
    NotFoundComponent,
  ]
})
export class SharedModule { }

