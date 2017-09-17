import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
      return this.http.get('/api/customer');
  }
}
