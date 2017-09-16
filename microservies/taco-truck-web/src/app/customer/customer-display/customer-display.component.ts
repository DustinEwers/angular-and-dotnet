import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import {MdPaginator} from '@angular/material';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-customer-display',
  templateUrl: './customer-display.component.html',
  styleUrls: ['./customer-display.component.css']
})
export class CustomerDisplayComponent implements OnInit {
  dataAdapter = new CustomerDataAdapter();
  dataSource: CustomerDataSource | null;
  displayedColumns = ['firstName', 'lastName', 'email', 'address', 'address2'];
  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private service: CustomerService) {

  }

  ngOnInit() {
    this.service.getCustomers().forEach(x => x.map(y => this.dataAdapter.add(y)) );
    this.dataSource = new CustomerDataSource(this.dataAdapter, this.paginator);
  }
}

export class CustomerDataAdapter {
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get data(): any[] { return this.dataChange.value; }

  add(item: any) {
    const copiedData = this.data.slice();
    copiedData.push(item);
    this.dataChange.next(copiedData);
  }
}

export class CustomerDataSource extends DataSource<any> {
  constructor(private adapter: CustomerDataAdapter, private _paginator: MdPaginator) {
    super();
  }

  connect(): Observable<any[]> {
    const displayDataChanges = [
      this.adapter.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.adapter.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}
