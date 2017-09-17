import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  products: any[];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data => this.products = data);
  }

}
