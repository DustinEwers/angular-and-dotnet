import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}

    getProducts():Observable<any> {
        // tslint:disable-next-line:max-line-length
        return this.http.get('https://taco-truck-demo-api.azurewebsites.net/api/Products?code=QDb0RoRlrHR85cEMfKx7OyPvzKRAqRFIXZJqB3d4yY14aZ0YvRDJbQ==');
    }
}
