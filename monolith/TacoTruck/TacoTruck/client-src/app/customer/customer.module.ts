import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CustomerDisplayComponent } from './customer-display/customer-display.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';

const routes: Routes = [
  { path: 'customers',  component: CustomerDisplayComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, CustomerDisplayComponent],
  providers :[CustomerService]
})
export class CustomerModule { }
