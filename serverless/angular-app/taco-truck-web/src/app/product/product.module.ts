import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

const routes: Routes = [
  { path: 'products',  component: ProductDisplayComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes)    
  ],
  declarations: [IndexComponent, ProductDisplayComponent],
  providers:[ProductService]
})
export class ProductModule { }
