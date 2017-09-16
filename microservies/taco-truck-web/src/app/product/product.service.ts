import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}

    getProducts():Observable<any> {
        return this.http.get('http://localhost:4001/api/product');
    }
}
