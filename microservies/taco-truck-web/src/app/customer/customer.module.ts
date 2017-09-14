import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CustomerDisplayComponent } from './customer-display/customer-display.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers',  component: CustomerDisplayComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, CustomerDisplayComponent]
})
export class CustomerModule { }
