import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor(private service:DeliveryService) { }
  response:any;
  message = '';

  ngOnInit(): void {
  }

  requestDelivery(){
    return this.service.getDelivery().subscribe({
      next: data => this.response = data,
      error: error => this.message = error,
      complete: () => this.message = "Request complete."
    });
  }
}
