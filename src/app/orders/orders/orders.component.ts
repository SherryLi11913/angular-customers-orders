import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../core/data.service';
import { Customer, Order, OrderItem } from '../../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  customer: Customer | null = null;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '-1');

    this.dataService.getOrders(id).subscribe((orders: Order[]) => {
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: Customer | null) => {
      this.customer = customer;
    });
  }

}
