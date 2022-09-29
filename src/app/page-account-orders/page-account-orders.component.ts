import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-account-orders',
  templateUrl: './page-account-orders.component.html',
  styleUrls: ['./page-account-orders.component.scss']
})
export class PageAccountOrdersComponent implements OnInit {
  response: any;
  get=false;
  message='';

  constructor(private route:ActivatedRoute, private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders(2).subscribe({
      next: data => {
        this.response = data;
        this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request Completed..."
    });
  }


  }
