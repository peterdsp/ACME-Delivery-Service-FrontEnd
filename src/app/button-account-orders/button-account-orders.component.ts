import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-button-account-orders',
  templateUrl: './button-account-orders.component.html',
  styleUrls: ['./button-account-orders.component.scss']
})
export class ButtonAccountOrdersComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  response:any;
  get = false;
  message = '';

  ngOnInit(): void {
  }

  requestOrder(){
    // this.router.navigate(['/accountOrders/2']);
  }
}
