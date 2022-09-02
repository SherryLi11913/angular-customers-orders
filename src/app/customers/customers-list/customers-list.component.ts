import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../../shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  
  private _customers: Customer[] = [];
  @Input() get customers(): Customer[] {
    return this._customers;
  }
  set customers(value: Customer[]) {
    if (value) {
      this._customers = value;
      this.filteredCustomers = value;
      this.calculatorOrders();
    }
  }

  filteredCustomers: Customer[] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'USD';

  constructor(private sorterService: SorterService) { }

  ngOnInit(): void {
  }

  calculatorOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: Customer) => {
      this.customersOrderTotal += (customer.orderTotal || 0);
    });
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((customer: Customer) => {
        return customer.name.toLowerCase().indexOf(data.toLowerCase()) > -1 || 
               customer.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               ((customer.orderTotal || NaN).toString()).indexOf(data) > -1;
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculatorOrders();
  }

  sort(by: string) {
    this.sorterService.sort(this.customers, by);
  }
}
