import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';

const routes: Routes = [
  { path: 'products',  component: ProductDisplayComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes)    
  ],
  declarations: [IndexComponent, ProductDisplayComponent]
})
export class ProductModule { }
