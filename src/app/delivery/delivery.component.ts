import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor(private service:DeliveryService) { }

  ngOnInit(): void {
  }

  requestDelivery(){
    this.service.getDelivery().subscribe({
      next: data => this.response= data{);}


}
